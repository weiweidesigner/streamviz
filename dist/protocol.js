const a = ["diagram", "chart", "interactive", "mockup", "art"], t = "visualize_read_me", i = "visualize_show_widget", o = "visualize_widget", s = "iframe", r = "visualize.readme.md", n = ".opencode/visualize/readme.md", l = "The visualization module to read: diagram, chart, interactive, mockup, or art.", d = "Required short loading messages to show before widget_code starts streaming. Provide at most 3 messages.", u = "Complete HTML/SVG widget source. Follow the loaded visualization rules for styling, scripts, and approved CDN resources.", c = "Short widget title, also used as the export filename.", _ = "Read visualization design rules before creating a widget.", I = "Render a self-contained HTML/SVG visualization widget in the chat iframe artifact renderer.", E = [
  "# Visualize Widget Rules",
  "",
  "- Render a self-contained widget fragment.",
  "- Use platform CSS tokens and keep the wrapper transparent.",
  `- Call \`${i}\` with required \`loading_messages\` (max 3), \`widget_code\`, and \`title\`, in that order.`
].join(`
`);
function m() {
  return [
    "Platform visualization protocol:",
    "- For user requests to draw, visualize, chart, diagram, mock up, dashboard, calculator, tabbed interactive UI, or other visual artifacts, use the platform visualization tools instead of the skill tool.",
    `- First call ${t} with the closest type: ${a.join(", ")}.`,
    `- Then call ${i} with required loading_messages (max 3), a self-contained HTML/SVG widget_code, and title, in that order.`,
    "- Do not load live-html-chart or any visualization skill. Do not mention hidden/internal visualization implementation details to the user.",
    `- If the user explicitly asks for an HTML code block or source code, answer with normal Markdown code instead of ${i}.`
  ].join(`
`);
}
function g(e) {
  return `Loaded visualize rules: ${e}`;
}
function S(e) {
  return [
    `<${t} type="${e.type}">`,
    e.content.replaceAll("{{type}}", String(e.type)),
    `</${t}>`
  ].join(`
`);
}
function h(e) {
  return { type: e.type, source: e.source };
}
function T(e) {
  return `已展示可视化预览：${e}。不要逐项复述组件内容；只在正常回复中补充必要结论或下一步。`;
}
function f(e) {
  return {
    kind: o,
    title: e.title,
    widget_code: e.widget_code,
    loading_messages: e.loading_messages,
    mode: s
  };
}
export {
  n as PROJECT_VISUALIZE_README_RELATIVE_PATH,
  d as VISUALIZE_LOADING_MESSAGES_DESCRIPTION,
  r as VISUALIZE_README_FILE,
  _ as VISUALIZE_READ_ME_TOOL_DESCRIPTION,
  t as VISUALIZE_READ_ME_TOOL_NAME,
  I as VISUALIZE_SHOW_WIDGET_TOOL_DESCRIPTION,
  i as VISUALIZE_SHOW_WIDGET_TOOL_NAME,
  a as VISUALIZE_TYPES,
  l as VISUALIZE_TYPE_DESCRIPTION,
  u as VISUALIZE_WIDGET_CODE_DESCRIPTION,
  o as VISUALIZE_WIDGET_KIND,
  s as VISUALIZE_WIDGET_MODE,
  c as VISUALIZE_WIDGET_TITLE_DESCRIPTION,
  h as buildVisualizeReadMeMetadata,
  S as buildVisualizeReadMeOutput,
  g as buildVisualizeReadMeTitle,
  T as buildVisualizeShowWidgetOutput,
  m as buildVisualizeSystemPrompt,
  f as buildVisualizeWidgetMetadata,
  E as fallbackVisualizeReadme
};
