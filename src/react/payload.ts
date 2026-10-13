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

/** Infer only explicit market labels/codes; mixed conventions need per-section markers. */
export function financialMarket(source: string, requested?: unknown): 'CN' | 'HK' | 'US' | undefined {
  const explicit = String(requested || '').toUpperCase();
  if (['CN', 'HK', 'US'].includes(explicit)) return explicit as 'CN' | 'HK' | 'US';
  // Full-document html attributes are stripped by iframe fragment parsing.
  const documentMarket = source.match(/<html\b[^>]*data-financial-market\s*=\s*["'](CN|HK|US)["']/i)?.[1]?.toUpperCase();
  if (documentMarket) return documentMarket as 'CN' | 'HK' | 'US';
  // Authored markers take precedence and can differ between sections.
  if (/data-financial-market\s*=/.test(source)) return undefined;
  const cn = /A\s*股|A-shares?\b|\b\d{6}\.(?:SH|SZ|BJ)\b/i.test(source);
  const hk = /港股|Hong Kong stocks?|\b\d{4,5}\.HK\b/i.test(source);
  const us = /美股|US stocks?|U\.S\. stocks?/i.test(source);
  if (us && (cn || hk)) return undefined;
  return cn ? 'CN' : hk ? 'HK' : us ? 'US' : undefined;
}

export function addFinancialMarketColors(code: string, requested?: unknown): string {
  if (!code.trim()) return code;
  const market = financialMarket(code, requested);
  if (!market) return code;
  const up = market === 'US' ? '--sv-gain' : '--sv-loss';
  const down = market === 'US' ? '--sv-loss' : '--sv-gain';
  // Use a style fragment instead of wrapping partially streamed or full documents.
  return `<style data-financial-market="${market}">:root{--sv-price-up:var(${up});--sv-price-down:var(${down})}</style>` + code;
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
  const code = addFinancialMarketColors(repairStreamedHtml(payload.code || payload.widgetCode || payload.widget_code || streamedCode || ""), payload.financialMarket);
  return {
    title: String(payload.title || streamedTitle || ""),
    code,
    exportCode: addFinancialMarketColors(String(payload.exportCode || payload.export_code || code), payload.financialMarket),
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

