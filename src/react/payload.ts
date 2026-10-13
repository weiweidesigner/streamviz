import { extractPartialJsonString, extractPartialJsonStringArray } from '../core/visualizeWidgetTool'

export function repairStreamedHtml(value: unknown): string {
  return String(value || "")
    .replace(/<(div|section|article|main|header|footer|span|p|h[1-6]|ul|ol|li|svg|g|rect|circle|path|line|polyline|text|tspan)(?=(?:class|style|id|role|aria-|data-|xmlns|viewBox|width|height|fill|stroke|points|font-size|font-weight|x|y|x1|y1|x2|y2|cx|cy|r|d)=)/gi, "<$1 ")
    .replace(/<(marker)(?=id=)/gi, "<$1 ")
    .replace(/(["'])(?=[A-Za-z_:][-A-Za-z0-9_:.]*=)/g, "$1 ")
    .replace(/\bsv-badge(?=sv-badge-)/g, "sv-badge ")
    .replace(/(\d|px|rem|%)(solid|dashed|dotted)(?=\b|var\()/gi, "$1 $2")
    .replace(/(solid|dashed|dotted)(?=var\()/gi, "$1 ")
    .replace(/viewBox=(["'])00(\d{2})(\d{2})\1/gi, (_match, quote, width, height) => `viewBox=${quote}0 0 ${width} ${height}${quote}`)
    .replace(/viewBox=(["'])00(\d{3})(\d{3})\1/gi, (_match, quote, width, height) => `viewBox=${quote}0 0 ${width} ${height}${quote}`)
    .replace(/viewBox=(["'])00(\d{4})(\d{3})\1/gi, (_match, quote, width, height) => `viewBox=${quote}0 0 ${width} ${height}${quote}`)
    .replace(/(?<=,\d{3})(?=\d{3},)/g, " ")
    .replace(/(?<=,\d{2})(?=\d{3},)/g, " ")
    .replace(/(?<=,\d)(?=\d{3},)/g, " ")
    .replace(/(\d+(?:px|rem|em|%))(?=\d+(?:px|rem|em|%|;|\b))/gi, "$1 ")
    .replace(/(?<=[:\s])0(?=auto\b)/gi, "0 ")
    .replace(/(?<=[:\s])0(?=\d+(?:px|rem|em|%))/gi, "0 ")
    .replace(/(?<=[:\s])00(?=[;\s"'])/g, "0 0");
}

export function normalizeStreamVisualizationPayload(payload: Record<string, unknown> = {}) {
  // Native OpenAI-compatible tool calls arrive as incomplete JSON argument
  // strings.  StreamViz's parser deliberately tolerates a string that ends in
  // the middle of widget_code, allowing SVG nodes to appear before the call is
  // complete.
  const rawArguments = String(payload.toolRawInput || payload.rawArguments || "");
  const streamedCode = rawArguments ? extractPartialJsonString(rawArguments, "widget_code") : "";
  const streamedTitle = rawArguments ? extractPartialJsonString(rawArguments, "title") : "";
  const streamedMessages = rawArguments ? extractPartialJsonStringArray(rawArguments, "loading_messages") : [];
  const code = repairStreamedHtml(payload.code || payload.widgetCode || payload.widget_code || streamedCode || "");
  return {
    title: String(payload.title || streamedTitle || ""),
    code,
    exportCode: String(payload.exportCode || payload.export_code || code),
    loadingMessage: String(payload.loadingMessage || payload.loading_message || "正在生成可视化"),
    loadingMessages: Array.isArray(payload.loadingMessages)
      ? payload.loadingMessages.map(String)
      : (Array.isArray(payload.loading_messages) ? payload.loading_messages.map(String) : streamedMessages),
    loadingDwellMs: Number.isFinite(Number(payload.loadingDwellMs))
      ? Number(payload.loadingDwellMs)
      : 0,
    final: Boolean(payload.final),
    showActions: false,
    smoothStreaming: (payload.smoothStreaming ?? payload.localSmooth) !== false,
  };
}

