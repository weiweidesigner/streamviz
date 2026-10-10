import { jsxs as ae, jsx as L } from "react/jsx-runtime";
import { useContext as je, createContext as Ue, forwardRef as xe, createElement as ie, useRef as h, useState as f, useMemo as M, useEffect as y } from "react";
import { visualizeWidgetSourceKey as se, getCachedVisualizeWidgetHeight as be, setCachedVisualizeWidgetHeight as We } from "./core.js";
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = (...t) => t.filter((e, r, n) => !!e && e.trim() !== "" && n.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, n) => n ? n.toUpperCase() : r.toLowerCase()
);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = (t) => {
  const e = _e(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var oe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, Oe = Ue({}), Ve = () => je(Oe), Pe = xe(
  ({ color: t, size: e, strokeWidth: r, absoluteStrokeWidth: n, className: d = "", children: l, iconNode: a, ...b }, v) => {
    const {
      size: p = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: K = !1,
      color: R = "currentColor",
      className: Z = ""
    } = Ve() ?? {}, U = n ?? K ? Number(r ?? u) * 24 / Number(e ?? p) : r ?? u;
    return ie(
      "svg",
      {
        ref: v,
        ...oe,
        width: e ?? p ?? oe.width,
        height: e ?? p ?? oe.height,
        stroke: t ?? R,
        strokeWidth: U,
        className: we("lucide", Z, d),
        ...!l && !De(b) && { "aria-hidden": "true" },
        ...b
      },
      [
        ...a.map(([W, E]) => ie(W, E)),
        ...Array.isArray(l) ? l : [l]
      ]
    );
  }
);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G = (t, e) => {
  const r = xe(
    ({ className: n, ...d }, l) => ie(Pe, {
      ref: l,
      iconNode: e,
      className: we(
        `lucide-${He(pe(t))}`,
        `lucide-${t}`,
        n
      ),
      ...d
    })
  );
  return r.displayName = pe(t), r;
};
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], qe = G("check", Be);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], $e = G("code-xml", Fe);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Ke = G("copy", Ge);
/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Ye = G("download", Ze), Xe = (t) => String(t || "visualize-widget").replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, "-").slice(0, 80) || "visualize-widget", Je = (t, e) => {
  const r = String(t || "");
  return /<html[\s>]/i.test(r) ? r : [
    "<!doctype html>",
    '<html lang="zh-CN">',
    "<head>",
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${e.replace(/[<&>]/g, "") || "Visualize Widget"}</title>`,
    "</head>",
    "<body>",
    r,
    "</body>",
    "</html>"
  ].join(`
`);
}, Qe = (t, e) => {
  if (typeof document > "u" || typeof URL > "u") return;
  const r = URL.createObjectURL(new Blob([t], { type: "text/html;charset=utf-8" })), n = document.createElement("a");
  n.href = r, n.download = e, n.click(), URL.revokeObjectURL(r);
}, et = async (t, e) => {
  var n;
  if (e) return !!await e(t);
  if (typeof ClipboardItem > "u") return !1;
  const r = await (await fetch(t)).blob();
  return await ((n = navigator.clipboard) == null ? void 0 : n.write([new ClipboardItem({ "image/png": r })])), !0;
}, ke = (t, e, r = Number.POSITIVE_INFINITY) => Math.min(r, Math.max(e, Math.ceil(t))), tt = (t, e) => {
  if (!e) return 48;
  const r = String(t || "");
  if (!r.trim()) return 48;
  const n = r.replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<script[\s\S]*?<\/script>/gi, ""), d = n.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(), l = (n.match(/<(?:section|article|header|footer|div|p|li|tr|h[1-6])\b/gi) || []).length, a = (n.match(/<svg\b/gi) || []).length, b = (n.match(/<tr\b/gi) || []).length, v = (n.match(/<(?:button|input|select|textarea)\b/gi) || []).length, p = Math.ceil(d.length / 88) * 24, u = l * 10 + b * 24 + v * 20 + a * 192;
  return ke(96 + p + u, 176, 1280);
}, rt = (t) => {
  const e = String(t || "").trim();
  if (!e) return !1;
  if (typeof DOMParser < "u")
    try {
      const r = new DOMParser().parseFromString(e, "text/html").body;
      return r ? (r.querySelectorAll("style,script,template,title,meta,link").forEach((n) => n.remove()), String(r.textContent || "").replace(/\s+/g, "").trim() ? !0 : !!r.querySelector("svg,canvas,img,picture,video,table,ul,ol,button,input,select,textarea,progress")) : !1;
    } catch {
      return !1;
    }
  return !!e.replace(/<head[\s\S]*?(?:<\/head>|$)/gi, "").replace(/<style[\s\S]*?(?:<\/style>|$)/gi, "").replace(/<script[\s\S]*?(?:<\/script>|$)/gi, "").replace(/<template[\s\S]*?(?:<\/template>|$)/gi, "").replace(/<title[\s\S]*?(?:<\/title>|$)/gi, "").replace(/<(?:meta|link)\b[^>]*>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, "").trim();
}, nt = [
  "--sem-bg-page",
  "--sem-bg-surface",
  "--sem-bg-card",
  "--sem-bg-muted",
  "--sem-border-subtle",
  "--sem-border-default",
  "--sem-border-strong",
  "--sem-text-primary",
  "--sem-text-secondary",
  "--sem-text-tertiary",
  "--sem-accent-primary",
  "--sem-status-info",
  "--sem-status-success",
  "--sem-status-warning",
  "--sem-status-danger",
  "--blue-9",
  "--cyan-9",
  "--green-9",
  "--amber-9",
  "--orange-9",
  "--red-9",
  "--violet-9",
  "--pink-9",
  "--shadow-lg",
  "--text-sm",
  "--font-sans",
  "--font-mono",
  "--spacing"
], kt = [
  "backgroundPage",
  "backgroundSurface",
  "backgroundElevated",
  "backgroundMuted",
  "backgroundInfo",
  "backgroundSuccess",
  "backgroundWarning",
  "backgroundDanger",
  "textPrimary",
  "textSecondary",
  "textMuted",
  "textInfo",
  "textSuccess",
  "textWarning",
  "textDanger",
  "borderSubtle",
  "borderDefault",
  "borderStrong",
  "borderInfo",
  "borderSuccess",
  "borderWarning",
  "borderDanger",
  "accent",
  "statusInfo",
  "statusSuccess",
  "statusWarning",
  "statusDanger",
  "radiusMedium",
  "radiusLarge",
  "radiusExtraLarge",
  "fontSans",
  "fontSerif",
  "fontMono",
  "chartSeries"
], at = {
  backgroundPage: ["--sv-bg-page", "--color-background-tertiary", "--sem-bg-page"],
  backgroundSurface: ["--sv-bg-surface", "--color-background-primary", "--sem-bg-surface"],
  backgroundElevated: ["--sv-bg-elevated", "--color-background-secondary", "--sem-bg-card"],
  backgroundMuted: ["--sv-bg-muted", "--color-background-muted", "--sem-bg-muted"],
  backgroundInfo: ["--sv-bg-info", "--color-background-info"],
  backgroundSuccess: ["--sv-bg-success", "--color-background-success"],
  backgroundWarning: ["--sv-bg-warning", "--color-background-warning"],
  backgroundDanger: ["--sv-bg-danger", "--color-background-danger"],
  textPrimary: ["--sv-text-primary", "--color-text-primary", "--sem-text-primary"],
  textSecondary: ["--sv-text-secondary", "--color-text-secondary", "--sem-text-secondary"],
  textMuted: ["--sv-text-muted", "--color-text-tertiary", "--sem-text-tertiary"],
  textInfo: ["--sv-text-info", "--color-text-info"],
  textSuccess: ["--sv-text-success", "--color-text-success"],
  textWarning: ["--sv-text-warning", "--color-text-warning"],
  textDanger: ["--sv-text-danger", "--color-text-danger"],
  borderSubtle: ["--sv-border-subtle", "--color-border-tertiary", "--sem-border-subtle"],
  borderDefault: ["--sv-border-default", "--color-border-secondary", "--sem-border-default"],
  borderStrong: ["--sv-border-strong", "--color-border-primary", "--sem-border-strong"],
  borderInfo: ["--sv-border-info", "--color-border-info"],
  borderSuccess: ["--sv-border-success", "--color-border-success"],
  borderWarning: ["--sv-border-warning", "--color-border-warning"],
  borderDanger: ["--sv-border-danger", "--color-border-danger"],
  accent: ["--sv-accent", "--sem-accent-primary"],
  statusInfo: ["--sv-status-info", "--sem-status-info"],
  statusSuccess: ["--sv-status-success", "--sem-status-success"],
  statusWarning: ["--sv-status-warning", "--sem-status-warning"],
  statusDanger: ["--sv-status-danger", "--sem-status-danger"],
  radiusMedium: ["--sv-radius-md", "--border-radius-md"],
  radiusLarge: ["--sv-radius-lg", "--border-radius-lg"],
  radiusExtraLarge: ["--sv-radius-xl", "--border-radius-xl"],
  fontSans: ["--sv-font-sans", "--font-sans"],
  fontSerif: ["--sv-font-serif", "--font-serif"],
  fontMono: ["--sv-font-mono", "--font-mono"]
}, he = (t) => {
  const e = String(t || "").trim();
  return !e || e.length > 512 || /[;{}<>]/.test(e) ? "" : e;
}, fe = (t) => {
  var e;
  return ((e = t.match(/^var\(\s*(--[a-z0-9-]+)\s*\)$/i)) == null ? void 0 : e[1]) || "";
}, st = (t) => {
  var n;
  const e = t == null ? void 0 : t.tokens;
  if (!e) return "";
  const r = [];
  return Object.entries(at).forEach(([d, l]) => {
    const a = he(e[d]);
    if (!a) return;
    const b = fe(a);
    l.forEach((v) => {
      v !== b && r.push(`${v}:${a};`);
    });
  }), (n = e.chartSeries) == null || n.slice(0, 8).forEach((d, l) => {
    const a = he(d);
    if (!a) return;
    const b = fe(a);
    [`--sv-chart-series-${l + 1}`, `--chart-series-${l + 1}`].forEach((v) => {
      v !== b && r.push(`${v}:${a};`);
    });
  }), r.join("");
}, ot = (t, e) => {
  var d;
  const r = t == null ? void 0 : t.mode;
  if (r === "light" || r === "dark") return r;
  const n = String((e == null ? void 0 : e()) || document.documentElement.dataset.theme || "").trim();
  return n === "light" || n === "dark" ? n : (d = window.matchMedia) != null && d.call(window, "(prefers-color-scheme: dark)").matches ? "dark" : "light";
}, it = (t, e) => e.map((r) => {
  const n = t.getPropertyValue(r).trim();
  return n ? `${r}:${n};` : "";
}).join(""), ct = `:root,
[data-theme="light"] {
  color-scheme: light;
  --sv-slate-1: #fcfcfd;
  --sv-slate-2: #f9f9fb;
  --sv-slate-3: #f0f0f3;
  --sv-slate-6: #d9d9e0;
  --sv-slate-7: #cdced6;
  --sv-slate-8: #b9bbc6;
  --sv-slate-11: #60646c;
  --sv-slate-12: #1c2024;
  --sv-indigo-3: #edf2fe;
  --sv-indigo-7: #abbdf9;
  --sv-indigo-9: #3e63dd;
  --sv-indigo-11: #3a5bc7;
  --sv-jade-3: #e6f4ea;
  --sv-jade-7: #92ceac;
  --sv-jade-9: #29a383;
  --sv-jade-11: #208368;
  --sv-amber-3: #fff3d0;
  --sv-amber-7: #e8c36a;
  --sv-amber-9: #f5b31b;
  --sv-amber-11: #915930;
  --sv-red-3: #feebec;
  --sv-red-7: #f3aeaf;
  --sv-red-9: #e5484d;
  --sv-red-11: #ce2c31;
  --sv-bg-page: var(--sv-slate-3);
  --sv-bg-surface: var(--sv-slate-1);
  --sv-bg-elevated: var(--sv-slate-2);
  --sv-bg-muted: var(--sv-slate-3);
  --sv-bg-info: var(--sv-indigo-3);
  --sv-bg-success: var(--sv-jade-3);
  --sv-bg-warning: var(--sv-amber-3);
  --sv-bg-danger: var(--sv-red-3);
  --sv-text-primary: var(--sv-slate-12);
  --sv-text-secondary: var(--sv-slate-11);
  --sv-text-muted: #6f737c;
  --sv-text-info: var(--sv-indigo-11);
  --sv-text-success: var(--sv-jade-11);
  --sv-text-warning: var(--sv-amber-11);
  --sv-text-danger: var(--sv-red-11);
  --sv-border-subtle: var(--sv-slate-6);
  --sv-border-default: var(--sv-slate-7);
  --sv-border-strong: var(--sv-slate-8);
  --sv-border-info: var(--sv-indigo-7);
  --sv-border-success: var(--sv-jade-7);
  --sv-border-warning: var(--sv-amber-7);
  --sv-border-danger: var(--sv-red-7);
  --sv-accent: var(--sv-indigo-9);
  --sv-status-info: var(--sv-indigo-9);
  --sv-status-success: var(--sv-jade-9);
  --sv-status-warning: var(--sv-amber-9);
  --sv-status-danger: var(--sv-red-9);
  --sv-radius-md: 8px;
  --sv-radius-lg: 12px;
  --sv-radius-xl: 16px;
  --sv-space-1: 4px;
  --sv-space-2: 8px;
  --sv-space-3: 12px;
  --sv-space-4: 16px;
  --sv-space-5: 20px;
  --sv-space-6: 24px;
  --sv-font-sans: ui-sans-serif, system-ui, sans-serif;
  --sv-font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --sv-font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --color-background-primary: var(--sv-bg-surface);
  --color-background-secondary: var(--sv-bg-elevated);
  --color-background-tertiary: var(--sv-bg-page);
  --color-background-muted: var(--sv-bg-muted);
  --color-background-info: var(--sv-bg-info);
  --color-background-danger: var(--sv-bg-danger);
  --color-background-success: var(--sv-bg-success);
  --color-background-warning: var(--sv-bg-warning);
  --color-text-primary: var(--sv-text-primary);
  --color-text-secondary: var(--sv-text-secondary);
  --color-text-tertiary: var(--sv-text-muted);
  --color-text-info: var(--sv-text-info);
  --color-text-danger: var(--sv-text-danger);
  --color-text-success: var(--sv-text-success);
  --color-text-warning: var(--sv-text-warning);
  --color-border-primary: var(--sv-border-strong);
  --color-border-secondary: var(--sv-border-default);
  --color-border-tertiary: var(--sv-border-subtle);
  --color-border-info: var(--sv-border-info);
  --color-border-danger: var(--sv-border-danger);
  --color-border-success: var(--sv-border-success);
  --color-border-warning: var(--sv-border-warning);
  --sem-bg-page: var(--sv-bg-page);
  --sem-bg-surface: var(--sv-bg-surface);
  --sem-bg-card: var(--sv-bg-elevated);
  --sem-bg-muted: var(--sv-bg-muted);
  --sem-border-subtle: var(--sv-border-subtle);
  --sem-border-default: var(--sv-border-default);
  --sem-border-strong: var(--sv-border-strong);
  --sem-text-primary: var(--sv-text-primary);
  --sem-text-secondary: var(--sv-text-secondary);
  --sem-text-tertiary: var(--sv-text-muted);
  --sem-accent-primary: var(--sv-accent);
  --sem-status-info: var(--sv-status-info);
  --sem-status-success: var(--sv-status-success);
  --sem-status-warning: var(--sv-status-warning);
  --sem-status-danger: var(--sv-status-danger);
  --sv-chart-series-1: #3e63dd;
  --sv-chart-series-2: #12a594;
  --sv-chart-series-3: #8e4ec6;
  --sv-chart-series-4: #e5484d;
  --sv-chart-series-5: #f5b31b;
  --sv-chart-series-6: #0090ff;
  --sv-chart-series-7: #ab4aba;
  --sv-chart-series-8: #46a758;
  --chart-series-1: var(--sv-chart-series-1);
  --chart-series-2: var(--sv-chart-series-2);
  --chart-series-3: var(--sv-chart-series-3);
  --chart-series-4: var(--sv-chart-series-4);
  --chart-series-5: var(--sv-chart-series-5);
  --chart-series-6: var(--sv-chart-series-6);
  --chart-series-7: var(--sv-chart-series-7);
  --chart-series-8: var(--sv-chart-series-8);
  --border-radius-md: var(--sv-radius-md);
  --border-radius-lg: var(--sv-radius-lg);
  --border-radius-xl: var(--sv-radius-xl);
  --font-sans: var(--sv-font-sans);
  --font-serif: var(--sv-font-serif);
  --font-mono: var(--sv-font-mono);
}

[data-theme="dark"] {
  color-scheme: dark;
  --sv-slate-1: #111113;
  --sv-slate-2: #18191b;
  --sv-slate-3: #212225;
  --sv-slate-6: #363a3f;
  --sv-slate-7: #43484e;
  --sv-slate-8: #5a6169;
  --sv-slate-11: #b0b4ba;
  --sv-slate-12: #edeef0;
  --sv-indigo-3: #182449;
  --sv-indigo-7: #3a4f97;
  --sv-indigo-9: #3e63dd;
  --sv-indigo-11: #9eb1ff;
  --sv-jade-3: #132d21;
  --sv-jade-7: #1b5745;
  --sv-jade-9: #29a383;
  --sv-jade-11: #7ce2bd;
  --sv-amber-3: #35290f;
  --sv-amber-7: #6a4f0b;
  --sv-amber-9: #f5b31b;
  --sv-amber-11: #facf72;
  --sv-red-3: #3b1219;
  --sv-red-7: #7e2e33;
  --sv-red-9: #e5484d;
  --sv-red-11: #ff9592;
  --sv-text-muted: #7b7f88;
  --sv-chart-series-1: #9eb1ff;
  --sv-chart-series-2: #0bd8b6;
  --sv-chart-series-3: #d19dff;
  --sv-chart-series-4: #ff9592;
  --sv-chart-series-5: #facf72;
  --sv-chart-series-6: #70b8ff;
  --sv-chart-series-7: #e796f3;
  --sv-chart-series-8: #7ce2bd;
}

/* Preserve meaning when the operating system owns the color palette. */
@media (forced-colors: active) {
  :root,
  [data-theme="light"],
  [data-theme="dark"] {
    --sv-bg-page: Canvas;
    --sv-bg-surface: Canvas;
    --sv-bg-elevated: ButtonFace;
    --sv-bg-muted: ButtonFace;
    --sv-bg-info: Canvas;
    --sv-bg-success: Canvas;
    --sv-bg-warning: Canvas;
    --sv-bg-danger: Canvas;
    --sv-text-primary: CanvasText;
    --sv-text-secondary: CanvasText;
    --sv-text-muted: GrayText;
    --sv-text-info: LinkText;
    --sv-text-success: CanvasText;
    --sv-text-warning: CanvasText;
    --sv-text-danger: CanvasText;
    --sv-border-subtle: GrayText;
    --sv-border-default: ButtonText;
    --sv-border-strong: CanvasText;
    --sv-border-info: LinkText;
    --sv-border-success: CanvasText;
    --sv-border-warning: CanvasText;
    --sv-border-danger: CanvasText;
    --sv-accent: Highlight;
    --sv-status-info: LinkText;
    --sv-status-success: CanvasText;
    --sv-status-warning: CanvasText;
    --sv-status-danger: CanvasText;
  }

  a {
    color: LinkText;
  }

  button,
  input,
  select,
  textarea {
    forced-color-adjust: auto;
  }
}

html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: transparent;
  color: var(--color-text-primary);
  font: 400 16px/1.7 var(--font-sans, ui-sans-serif, system-ui, sans-serif);
}

#root {
  min-height: 1px;
  margin: 0;
  padding: 0;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

img,
svg,
canvas,
video {
  max-width: 100%;
  height: auto;
}

[data-visualize-root] {
  width: 100%;
  max-width: 100%;
  color: var(--color-text-primary);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

h1,
h2,
h3,
h4,
p,
ul,
ol,
figure,
table,
svg {
  margin-block-start: 0;
}

h1 {
  margin: 0 0 16px;
  color: var(--color-text-primary);
  font-size: 22px;
  line-height: 1.3;
  font-weight: 500;
}

h2 {
  margin: 0 0 12px;
  color: var(--color-text-primary);
  font-size: 18px;
  line-height: 1.35;
  font-weight: 500;
}

h3 {
  margin: 16px 0 8px;
  color: var(--color-text-primary);
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
}

p,
ul,
ol {
  color: var(--color-text-secondary);
}

p {
  margin: 0 0 1rem;
}

ul,
ol {
  margin: 0 0 1rem;
  padding-inline-start: 1.25rem;
}

li {
  margin: 0 0 0.5rem;
}

.grid,
.cards,
.metrics,
.metric-grid,
.status-grid,
.status-board,
.board,
.columns,
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}

.card,
.panel,
.metric,
.metric-card,
.kpi,
.status,
.item,
.column,
.lane,
.check-item {
  border: 0.5px solid var(--color-border-tertiary);
  background: var(--color-background-primary);
  border-radius: var(--border-radius-lg);
  padding: 1rem 1.25rem;
}

.metric,
.metric-card,
.kpi {
  display: grid;
  gap: 4px;
  border: 0;
  background: var(--color-background-secondary);
  border-radius: var(--border-radius-md);
  padding: 1rem;
}

.metric > :is(span, small, .label),
.metric-card > :is(span, small, .label),
.kpi > :is(span, small, .label) {
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.35;
}

.metric > :is(strong, .value),
.metric-card > :is(strong, .value),
.kpi > :is(strong, .value) {
  color: var(--color-text-primary);
  font-size: 24px;
  line-height: 1.15;
  font-weight: 500;
}

.chip,
.badge,
.pill,
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0.5px solid var(--color-border-tertiary);
  border-radius: var(--border-radius-md);
  padding: 4px 12px;
  color: var(--color-text-primary);
  background: var(--color-background-secondary);
}

button,
input,
select,
textarea {
  font: inherit;
  color: var(--color-text-primary);
  border: 0.5px solid var(--color-border-secondary);
  background: transparent;
  border-radius: var(--border-radius-md);
}

input,
select,
textarea {
  display: block;
  width: 100%;
  max-width: 100%;
  min-height: 36px;
  margin: 6px 0 10px;
  padding: 6px 10px;
}

label {
  display: block;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.35;
}

textarea {
  min-height: 80px;
  resize: var(--sem-resize-y);
}

button {
  min-height: 32px;
  padding: 6px 12px;
  cursor: var(--sem-cursor-pointer);
}

button:hover,
input:hover,
select:hover,
textarea:hover {
  background: var(--color-background-secondary);
}

button:active {
  transform: scale(var(--sem-scale-98));
}

button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-border-info);
}

input[type="range"] {
  height: 18px;
  padding: 0;
  accent-color: var(--color-border-info);
  border: 0;
  background: transparent;
}

table {
  width: 100%;
  border-collapse: var(--sem-table-border-collapse);
  border: 0.5px solid var(--color-border-tertiary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  background: var(--color-background-primary);
}

th,
td {
  padding: 8px 12px;
  border-bottom: 0.5px solid var(--color-border-tertiary);
  text-align: left;
  vertical-align: top;
}

th {
  color: var(--color-text-primary);
  background: var(--color-background-secondary);
  font-weight: 500;
}

td {
  color: var(--color-text-secondary);
}

svg {
  display: block;
  max-width: 100%;
  height: auto;
  color: var(--color-text-secondary);
}

svg text,
svg tspan {
  fill: var(--color-text-secondary);
}

.t {
  color: var(--color-text-primary);
  fill: var(--color-text-primary);
}

.ts {
  color: var(--color-text-secondary);
  fill: var(--color-text-secondary);
}

.th {
  color: var(--color-text-tertiary);
  fill: var(--color-text-tertiary);
}

:root,
[data-theme="light"] {
  --c-purple-fill: #eeedfe;
  --c-purple-stroke: #534ab7;
  --c-purple-title: #3c3489;
  --c-purple-subtitle: #534ab7;
  --c-teal-fill: #e1f5ee;
  --c-teal-stroke: #0f6e56;
  --c-teal-title: #085041;
  --c-teal-subtitle: #0f6e56;
  --c-coral-fill: #faece7;
  --c-coral-stroke: #993c1d;
  --c-coral-title: #712b13;
  --c-coral-subtitle: #993c1d;
  --c-pink-fill: #fbeaf0;
  --c-pink-stroke: #993556;
  --c-pink-title: #72243e;
  --c-pink-subtitle: #993556;
  --c-gray-fill: #f1efe8;
  --c-gray-stroke: #5f5e5a;
  --c-gray-title: #444441;
  --c-gray-subtitle: #5f5e5a;
  --c-blue-fill: #e6f1fb;
  --c-blue-stroke: #185fa5;
  --c-blue-title: #0c447c;
  --c-blue-subtitle: #185fa5;
  --c-green-fill: #eaf3de;
  --c-green-stroke: #3b6d11;
  --c-green-title: #27500a;
  --c-green-subtitle: #3b6d11;
  --c-amber-fill: #faeeda;
  --c-amber-stroke: #854f0b;
  --c-amber-title: #633806;
  --c-amber-subtitle: #854f0b;
  --c-red-fill: #fcebeb;
  --c-red-stroke: #a32d2d;
  --c-red-title: #791f1f;
  --c-red-subtitle: #a32d2d;
}

[data-theme="dark"] {
  --c-purple-fill: #3c3489;
  --c-purple-stroke: #afa9ec;
  --c-purple-title: #cecbf6;
  --c-purple-subtitle: #afa9ec;
  --c-teal-fill: #085041;
  --c-teal-stroke: #5dcaa5;
  --c-teal-title: #9fe1cb;
  --c-teal-subtitle: #5dcaa5;
  --c-coral-fill: #712b13;
  --c-coral-stroke: #f0997b;
  --c-coral-title: #f5c4b3;
  --c-coral-subtitle: #f0997b;
  --c-pink-fill: #72243e;
  --c-pink-stroke: #ed93b1;
  --c-pink-title: #f4c0d1;
  --c-pink-subtitle: #ed93b1;
  --c-gray-fill: #444441;
  --c-gray-stroke: #b4b2a9;
  --c-gray-title: #d3d1c7;
  --c-gray-subtitle: #b4b2a9;
  --c-blue-fill: #0c447c;
  --c-blue-stroke: #85b7eb;
  --c-blue-title: #b5d4f4;
  --c-blue-subtitle: #85b7eb;
  --c-green-fill: #27500a;
  --c-green-stroke: #97c459;
  --c-green-title: #c0dd97;
  --c-green-subtitle: #97c459;
  --c-amber-fill: #633806;
  --c-amber-stroke: #ef9f27;
  --c-amber-title: #fac775;
  --c-amber-subtitle: #ef9f27;
  --c-red-fill: #791f1f;
  --c-red-stroke: #f09595;
  --c-red-title: #f7c1c1;
  --c-red-subtitle: #f09595;
}

.c-purple {
  --c-fill: var(--c-purple-fill);
  --c-stroke: var(--c-purple-stroke);
  --c-title: var(--c-purple-title);
  --c-subtitle: var(--c-purple-subtitle);
}

.c-teal {
  --c-fill: var(--c-teal-fill);
  --c-stroke: var(--c-teal-stroke);
  --c-title: var(--c-teal-title);
  --c-subtitle: var(--c-teal-subtitle);
}

.c-coral {
  --c-fill: var(--c-coral-fill);
  --c-stroke: var(--c-coral-stroke);
  --c-title: var(--c-coral-title);
  --c-subtitle: var(--c-coral-subtitle);
}

.c-pink {
  --c-fill: var(--c-pink-fill);
  --c-stroke: var(--c-pink-stroke);
  --c-title: var(--c-pink-title);
  --c-subtitle: var(--c-pink-subtitle);
}

.c-gray {
  --c-fill: var(--c-gray-fill);
  --c-stroke: var(--c-gray-stroke);
  --c-title: var(--c-gray-title);
  --c-subtitle: var(--c-gray-subtitle);
}

.c-blue {
  --c-fill: var(--c-blue-fill);
  --c-stroke: var(--c-blue-stroke);
  --c-title: var(--c-blue-title);
  --c-subtitle: var(--c-blue-subtitle);
}

.c-green {
  --c-fill: var(--c-green-fill);
  --c-stroke: var(--c-green-stroke);
  --c-title: var(--c-green-title);
  --c-subtitle: var(--c-green-subtitle);
}

.c-amber {
  --c-fill: var(--c-amber-fill);
  --c-stroke: var(--c-amber-stroke);
  --c-title: var(--c-amber-title);
  --c-subtitle: var(--c-amber-subtitle);
}

.c-red {
  --c-fill: var(--c-red-fill);
  --c-stroke: var(--c-red-stroke);
  --c-title: var(--c-red-title);
  --c-subtitle: var(--c-red-subtitle);
}

:is(.c-purple, .c-teal, .c-coral, .c-pink, .c-gray, .c-blue, .c-green, .c-amber, .c-red) {
  color: var(--c-title);
}

:is(.c-purple, .c-teal, .c-coral, .c-pink, .c-gray, .c-blue, .c-green, .c-amber, .c-red):is(rect, circle, ellipse, polygon),
:is(.c-purple, .c-teal, .c-coral, .c-pink, .c-gray, .c-blue, .c-green, .c-amber, .c-red) :is(rect, circle, ellipse, polygon) {
  fill: var(--c-fill);
  stroke: var(--c-stroke);
}

:is(.c-purple, .c-teal, .c-coral, .c-pink, .c-gray, .c-blue, .c-green, .c-amber, .c-red) :is(text, tspan),
:is(.c-purple, .c-teal, .c-coral, .c-pink, .c-gray, .c-blue, .c-green, .c-amber, .c-red) .t {
  fill: var(--c-title);
  color: var(--c-title);
}

:is(.c-purple, .c-teal, .c-coral, .c-pink, .c-gray, .c-blue, .c-green, .c-amber, .c-red) .ts,
:is(.c-purple, .c-teal, .c-coral, .c-pink, .c-gray, .c-blue, .c-green, .c-amber, .c-red) .th {
  fill: var(--c-subtitle);
  color: var(--c-subtitle);
}

.ti {
  display: inline-block;
  min-width: 1em;
  font-style: normal;
  line-height: 1;
  text-align: center;
}

.ti::before {
  content: "□";
}

.ti-home::before { content: "⌂"; }
.ti-settings::before { content: "⚙"; }
.ti-user::before { content: "◯"; }
.ti-search::before { content: "⌕"; }
.ti-x::before { content: "×"; }
.ti-check::before { content: "✓"; }
.ti-plus::before { content: "+"; }
.ti-trash::before { content: "⌫"; }
.ti-edit::before { content: "✎"; }
.ti-download::before { content: "↓"; }
.ti-upload::before { content: "↑"; }
.ti-file::before { content: "□"; }
.ti-folder::before { content: "▱"; }
.ti-chart-bar::before { content: "▥"; }
.ti-calendar::before { content: "▦"; }
.ti-clock::before { content: "◷"; }
.ti-arrow-right::before { content: "→"; }
.ti-arrow-left::before { content: "←"; }
.ti-chevron-down::before { content: "⌄"; }
.ti-external-link::before { content: "↗"; }
.ti-copy::before { content: "⧉"; }
.ti-refresh::before { content: "↻"; }
.ti-player-play::before { content: "▷"; }
.ti-player-pause::before { content: "Ⅱ"; }
.ti-heart::before { content: "♡"; }
.ti-star::before { content: "☆"; }
.ti-bell::before { content: "◌"; }
.ti-mail::before { content: "✉"; }
.ti-lock::before { content: "⌐"; }
.ti-eye::before { content: "◉"; }
.ti-menu-2::before { content: "☰"; }
`, lt = `/* StreamViz authoring primitives. Keep this set small, semantic, and stable. */
.sv-stack {
  display: grid;
  gap: var(--sv-space-3);
}

.sv-cluster {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--sv-space-2);
}

.sv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: var(--sv-space-3);
}

.sv-card {
  min-width: 0;
  padding: var(--sv-space-4) var(--sv-space-5);
  border: 0.5px solid var(--sv-border-subtle);
  border-radius: var(--sv-radius-lg);
  background: var(--sv-bg-surface);
  color: var(--sv-text-primary);
}

.sv-card-muted {
  background: var(--sv-bg-elevated);
}

.sv-card-accent {
  border-color: var(--sv-border-info);
  background: var(--sv-bg-info);
}

.sv-metric {
  display: grid;
  min-width: 0;
  gap: var(--sv-space-1);
  padding: var(--sv-space-4);
  border: 0;
  border-radius: var(--sv-radius-md);
  background: var(--sv-bg-elevated);
}

.sv-label,
.sv-kicker {
  margin: 0;
  color: var(--sv-text-secondary);
  font-size: 13px;
  line-height: 1.35;
  font-weight: 400;
}

.sv-value {
  margin: 0;
  color: var(--sv-text-primary);
  font-size: 24px;
  line-height: 1.15;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}

.sv-muted {
  color: var(--sv-text-muted);
}

.sv-badge {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: var(--sv-space-1);
  padding: 4px 10px;
  border: 0.5px solid var(--sv-border-subtle);
  border-radius: var(--sv-radius-md);
  background: var(--sv-bg-elevated);
  color: var(--sv-text-primary);
  font-size: 12px;
  line-height: 1.3;
}

.sv-badge-info {
  border-color: var(--sv-border-info);
  background: var(--sv-bg-info);
  color: var(--sv-text-info);
}

.sv-badge-success {
  border-color: var(--sv-border-success);
  background: var(--sv-bg-success);
  color: var(--sv-text-success);
}

.sv-badge-warning {
  border-color: var(--sv-border-warning);
  background: var(--sv-bg-warning);
  color: var(--sv-text-warning);
}

.sv-badge-danger {
  border-color: var(--sv-border-danger);
  background: var(--sv-bg-danger);
  color: var(--sv-text-danger);
}

.sv-divider {
  height: 0.5px;
  margin: var(--sv-space-3) 0;
  border: 0;
  background: var(--sv-border-subtle);
}

.sv-action {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: var(--sv-space-2);
  padding: 8px 14px;
  border: 0.5px solid var(--sv-border-default);
  border-radius: var(--sv-radius-md);
  background: var(--sv-bg-surface);
  color: var(--sv-text-primary);
  font: 500 13px/1.3 var(--sv-font-sans);
  cursor: pointer;
}

.sv-action:hover {
  border-color: var(--sv-border-info);
  background: var(--sv-bg-info);
  color: var(--sv-text-info);
}

.sv-action:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--sv-border-info);
}

.sv-chart-frame {
  position: relative;
  width: 100%;
  min-height: 240px;
}

@media (max-width: 520px) {
  .sv-card {
    padding: var(--sv-space-4);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sv-action {
    transition: none;
  }
}
`, dt = [
  ":root{",
  "--color-background-primary:Canvas;",
  "--border-radius-md:0;",
  "}",
  ".c-purple{}",
  ".sr-only{}",
  ".t,.ts,.th{}"
].join(""), vt = String(ct).trim() || dt, ut = String(lt).trim(), gt = (t) => {
  const e = `
(() => {
  const widgetId = ${JSON.stringify(t)};
  const root = document.getElementById('root');
  let lastExecuted = '';
  let lastRenderedSource = '';
  const blockedElements = new Set(['iframe', 'object', 'embed', 'base']);
  const urlAttributes = new Set(['href', 'src', 'xlink:href', 'formaction', 'poster']);
  const allowedResourceOrigins = new Set([
    'https://cdnjs.cloudflare.com',
    'https://esm.sh',
    'https://cdn.jsdelivr.net',
    'https://unpkg.com',
  ]);
  const isAllowedResourceUrl = (value) => {
    try {
      const url = new URL(String(value || ''), document.baseURI);
      return url.protocol === 'https:' && allowedResourceOrigins.has(url.origin);
    } catch (_error) {
      return false;
    }
  };
  const stripActiveContent = (doc) => {
    Array.from(doc.querySelectorAll(Array.from(blockedElements).join(','))).forEach((node) => node.remove());
    Array.from(doc.querySelectorAll('*')).forEach((node) => {
      Array.from(node.attributes || []).forEach((attribute) => {
        const name = String(attribute.name || '').trim().toLowerCase();
        const value = String(attribute.value || '').trim();
        if (name.startsWith('on')) {
          node.removeAttribute(attribute.name);
          return;
        }
        if (urlAttributes.has(name) && /^javascript:/i.test(value)) {
          node.removeAttribute(attribute.name);
        }
      });
    });
  };
  const applyHostCssVars = (cssText, theme) => {
    let style = document.getElementById('host-vars');
    if (!style) {
      style = document.createElement('style');
      style.id = 'host-vars';
      document.head.appendChild(style);
    }
    const normalizedTheme = String(theme || '').trim() === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = normalizedTheme;
    document.documentElement.style.colorScheme = normalizedTheme;
    style.textContent = ':root{' + String(cssText || '') + '}';
  };
  window.sendPrompt = (text) => {
    const prompt = String(text || '').trim().slice(0, 4000);
    if (!prompt) return;
    parent.postMessage({ type: 'visualize-widget:send-prompt', id: widgetId, prompt }, '*');
  };
  const visibleContentNodes = () =>
    Array.from(root?.children || []).filter((node) => !['STYLE', 'SCRIPT', 'TEMPLATE', 'TITLE', 'META', 'LINK'].includes(node.tagName));
  const platformNormalizeCss = [
    '[data-visualize-root]{width:100%!important;min-width:0!important;max-width:none!important;height:auto!important;min-height:0!important;max-height:none!important;overflow:visible!important;margin:0!important;padding-top:0!important;background:transparent!important}',
    '[data-visualize-root]>:is(section,main,article,div):first-child{width:100%!important;min-width:0!important;max-width:none!important;margin-left:0!important;margin-right:0!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv){--ink:var(--sv-text-primary)!important;--sub:var(--sv-text-secondary)!important;--line:var(--sv-border-subtle)!important;--card:var(--sv-bg-elevated)!important;color:var(--sv-text-primary)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) :is(h1,h2,h3,h4,h5,h6,b,strong,.sv-title,.sv-value,.v){color:var(--sv-text-primary)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) :is(p,li,.sv-sum,.pp-sub,.two p,ol.steps,.sv-label,.sv-muted,.k,.d){color:var(--sv-text-secondary)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) :is(.sv-card,.sv-metric,.pp-tabs>div,.sv-narr>div,.sv-note,svg.payoff){background:var(--sv-bg-elevated)!important;border-color:var(--sv-border-subtle)!important;color:var(--sv-text-primary)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) table{background:var(--sv-bg-surface)!important;color:var(--sv-text-secondary)!important;border-color:var(--sv-border-subtle)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) thead th{background:var(--sv-bg-muted)!important;color:var(--sv-text-secondary)!important;border-color:var(--sv-border-subtle)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) tbody td{background:var(--sv-bg-elevated)!important;color:var(--sv-text-secondary)!important;border-color:var(--sv-border-subtle)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) tbody tr.hl td{background:var(--sv-bg-info)!important;color:var(--sv-text-primary)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) :is(.sv-chip.success,.sv-badge-success){background:var(--sv-bg-success)!important;color:var(--sv-text-success)!important;border-color:var(--sv-border-success)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) :is(.sv-chip.warning,.sv-badge-warning){background:var(--sv-bg-warning)!important;color:var(--sv-text-warning)!important;border-color:var(--sv-border-warning)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) :is(.sv-chip.danger,.sv-badge-danger){background:var(--sv-bg-danger)!important;color:var(--sv-text-danger)!important;border-color:var(--sv-border-danger)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) svg :is(.ax,.lk,.lg){fill:var(--sv-text-secondary)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv,[data-visualize-root] .sv) svg :is(rect[fill="#eef2f7"],rect[fill="#f8fafc"],rect[fill="#fff"],rect[fill="#ffffff"]){fill:var(--sv-bg-muted)!important}',
    '[data-theme="dark"] :is([data-visualize-root].sv-card,[data-visualize-root].sv-metric,[data-visualize-root] .sv-card,[data-visualize-root] .sv-metric){background:var(--sv-bg-elevated)!important;color:var(--sv-text-primary)!important;border-color:var(--sv-border-subtle)!important}',
    '[data-theme="dark"] [data-visualize-root] :is(.sv-label,.sv-kicker,.sv-muted){color:var(--sv-text-secondary)!important}',
    '[data-theme="dark"] [data-visualize-root] .sv-value{color:var(--sv-text-primary)!important}',
    '[data-theme="dark"] [data-visualize-root] :is(.sv-badge,.sv-action){background:var(--sv-bg-elevated)!important;color:var(--sv-text-primary)!important;border-color:var(--sv-border-subtle)!important}',
    '[data-theme="dark"] [data-visualize-root] .sv-badge-info{background:var(--sv-bg-info)!important;color:var(--sv-text-info)!important;border-color:var(--sv-border-info)!important}',
    '[data-theme="dark"] [data-visualize-root] .sv-badge-success{background:var(--sv-bg-success)!important;color:var(--sv-text-success)!important;border-color:var(--sv-border-success)!important}',
    '[data-theme="dark"] [data-visualize-root] .sv-badge-warning{background:var(--sv-bg-warning)!important;color:var(--sv-text-warning)!important;border-color:var(--sv-border-warning)!important}',
    '[data-theme="dark"] [data-visualize-root] .sv-badge-danger{background:var(--sv-bg-danger)!important;color:var(--sv-text-danger)!important;border-color:var(--sv-border-danger)!important}',
  ].join('');
  const installPlatformNormalize = () => {
    if (!root) return;
    let style = root.querySelector('style[data-visualize-platform-normalize]');
    if (!style) {
      style = document.createElement('style');
      style.setAttribute('data-visualize-platform-normalize', '');
      root.appendChild(style);
    }
    style.textContent = platformNormalizeCss;
  };
  const isTransparentColor = (value) => {
    const color = String(value || '').replace(/\\s+/g, '').toLowerCase();
    if (!color || color === 'transparent') return true;
    if (!color.startsWith('rgb')) return false;
    const channels = color.match(/[\\d.]+/g) || [];
    return channels.length >= 4 && Number(channels[3]) === 0;
  };
  const hasVisiblePaintBox = (node) => {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
    const element = node;
    const styles = window.getComputedStyle(element);
    if (styles.display === 'none' || styles.visibility === 'hidden' || Number(styles.opacity) === 0) return false;
    const rects = Array.from(element.getClientRects ? element.getClientRects() : []);
    if (!rects.some((rect) => rect.width > 0 && rect.height > 0)) return false;
    if (element.matches('svg,canvas,img,picture,video,table,ul,ol,button,input,select,textarea,progress')) return true;
    const borderPainted = ['Top', 'Right', 'Bottom', 'Left'].some((side) => Number.parseFloat(styles['border-app' + side + 'Width'] || '0') > 0);
    return borderPainted || styles.backgroundImage !== 'none' || styles.boxShadow !== 'none' || !isTransparentColor(styles.backgroundColor);
  };
  const measureContentHeight = () => {
    if (!root) return 0;
    const nodes = visibleContentNodes();
    if (!nodes.length) return 0;
    const rootRect = root.getBoundingClientRect();
    let bottom = Math.max(0, root.scrollHeight);
    const paintedNodes = nodes.flatMap((node) => [node, ...Array.from(node.querySelectorAll('*'))]);
    paintedNodes.forEach((node) => {
      const styles = window.getComputedStyle(node);
      if (styles.display === 'none' || styles.visibility === 'hidden') return;
      const rect = node.getBoundingClientRect();
      bottom = Math.max(bottom, rect.bottom - rootRect.top);
    });
    const height = Math.max(1, bottom);
    return Number.isFinite(height) ? height : 0;
  };
  const postSize = () => {
    const height = measureContentHeight();
    parent.postMessage({ type: 'visualize-widget:size', id: widgetId, height, hasContent: hasRenderedContent() }, '*');
  };
  const hasRenderedContent = () => {
    if (!root) return false;
    const clone = root.cloneNode(true);
    clone.querySelectorAll?.('style,script,template,title,meta,link').forEach((node) => node.remove());
    const visibleText = String(clone.textContent || '').replace(/\\s+/g, '').trim();
    if (visibleText) return true;
    if (root.querySelector('svg,canvas,img,picture,video,table,ul,ol,button,input,select,textarea,progress')) return true;
    return Array.from(root.querySelectorAll('*')).some((node) => !['STYLE', 'SCRIPT'].includes(node.tagName) && hasVisiblePaintBox(node));
  };
  const htmlHasRenderedContent = (html) => {
    const container = document.createElement('div');
    container.innerHTML = String(html || '');
    container.querySelectorAll('style,script,template,title,meta,link').forEach((node) => node.remove());
    const visibleText = String(container.textContent || '').replace(/\\s+/g, '').trim();
    if (visibleText) return true;
    return Boolean(container.querySelector('svg,canvas,img,picture,video,table,ul,ol,button,input,select,textarea,progress'));
  };
  const normalizeSvgInk = () => {
    if (!root) return;
    const blackInk = new Set(['black', '#' + '000', '#' + '000000']);
    root.querySelectorAll('svg text, svg tspan').forEach((node) => {
      const fill = String(node.getAttribute('fill') || '').trim().toLowerCase();
      if (!fill || blackInk.has(fill)) node.style.fill = 'var(--sem-text-secondary)';
    });
    root.querySelectorAll('svg [stroke]').forEach((node) => {
      const stroke = String(node.getAttribute('stroke') || '').trim().toLowerCase();
      if (blackInk.has(stroke)) node.style.stroke = 'var(--sem-border-default)';
    });
    root.querySelectorAll('svg [fill]').forEach((node) => {
      if (node.matches('text,tspan')) return;
      const fill = String(node.getAttribute('fill') || '').trim().toLowerCase();
      if (blackInk.has(fill)) node.style.fill = 'var(--sem-bg-surface)';
    });
  };
  const snapshotStyleText = () =>
    Array.from(document.querySelectorAll('style')).map((node) => node.textContent || '').join('\\n');
  const canvasDataUrlFromSerializedSvg = (serialized, width, height, background) => new Promise((resolve, reject) => {
    const url = URL.createObjectURL(new Blob([serialized], { type: 'image/svg+xml;charset=utf-8' }));
    const image = new Image();
    image.onload = () => {
      try {
        const scale = Math.min(Math.max(window.devicePixelRatio || 1, 1), 2);
        const canvas = document.createElement('canvas');
        canvas.width = Math.ceil(width * scale);
        canvas.height = Math.ceil(height * scale);
        const context = canvas.getContext('2d');
        if (!context) {
          URL.revokeObjectURL(url);
          reject(new Error('missing canvas context'));
          return;
        }
        context.scale(scale, scale);
        context.fillStyle = background;
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL('image/png'));
      } catch (error) {
        URL.revokeObjectURL(url);
        reject(error);
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('snapshot render failed'));
    };
    image.src = url;
  });
  const directSvgSnapshotElement = () => {
    const nodes = visibleContentNodes();
    if (nodes.length !== 1) return null;
    const only = nodes[0];
    if (only?.matches?.('svg')) return only;
    const children = Array.from(only?.children || []).filter((node) => !['STYLE', 'SCRIPT', 'TEMPLATE', 'TITLE', 'META', 'LINK'].includes(node.tagName));
    if (children.length === 1 && children[0]?.matches?.('svg')) return children[0];
    return null;
  };
  const svgSnapshotSize = (svgNode, fallbackWidth, fallbackHeight) => {
    const rect = svgNode.getBoundingClientRect();
    const viewBox = svgNode.viewBox?.baseVal;
    const attrWidth = Number.parseFloat(svgNode.getAttribute('width') || '');
    const attrHeight = Number.parseFloat(svgNode.getAttribute('height') || '');
    return {
      width: Math.max(1, Math.ceil(viewBox?.width || attrWidth || rect.width || fallbackWidth || 1)),
      height: Math.max(1, Math.ceil(viewBox?.height || attrHeight || rect.height || fallbackHeight || 1)),
    };
  };
  const freezeSvgComputedStyles = (sourceNode, targetNode) => {
    const styleProperties = [
      'color',
      'fill',
      'fill-opacity',
      'stroke',
      'stroke-opacity',
      'stroke-width',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-dasharray',
      'stroke-dashoffset',
      'opacity',
      'font-family',
      'font-size',
      'font-style',
      'font-weight',
      'letter-spacing',
      'text-anchor',
      'dominant-baseline',
      'paint-order',
      'stop-color',
      'stop-opacity',
      'marker-start',
      'marker-mid',
      'marker-end',
    ];
    const sourceNodes = [sourceNode, ...Array.from(sourceNode.querySelectorAll('*'))];
    const targetNodes = [targetNode, ...Array.from(targetNode.querySelectorAll('*'))];
    sourceNodes.forEach((node, index) => {
      const target = targetNodes[index];
      if (!target || node.nodeType !== Node.ELEMENT_NODE) return;
      const styles = window.getComputedStyle(node);
      styleProperties.forEach((property) => {
        const value = styles.getPropertyValue(property);
        if (value) target.style.setProperty(property, value);
      });
    });
  };
  const serializeSvgForSnapshot = (svgNode, width, height) => {
    const clone = svgNode.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', String(width));
    clone.setAttribute('height', String(height));
    if (!clone.getAttribute('viewBox')) clone.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    freezeSvgComputedStyles(svgNode, clone);
    const styleText = snapshotStyleText();
    if (styleText) {
      const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      style.textContent = styleText;
      clone.insertBefore(style, clone.firstChild);
    }
    return new XMLSerializer().serializeToString(clone);
  };
  const buildSnapshotDataUrl = () => new Promise((resolve, reject) => {
    try {
      if (!root) {
        reject(new Error('missing root'));
        return;
      }
      const rootRect = root.getBoundingClientRect();
      const width = Math.max(1, Math.ceil(document.documentElement.clientWidth || root.scrollWidth || rootRect.width || 1));
      const height = Math.max(1, Math.ceil(measureContentHeight() || root.scrollHeight || rootRect.height || 1));
      const rootStyles = window.getComputedStyle(document.documentElement);
      const bodyStyles = window.getComputedStyle(document.body);
      const background = rootStyles.getPropertyValue('--sem-bg-page').trim() || bodyStyles.backgroundColor || 'Canvas';
      const renderForeignObjectSnapshot = () => {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
        wrapper.style.width = width + 'px';
        wrapper.style.minHeight = height + 'px';
        wrapper.style.margin = '0';
        wrapper.style.background = background;
        wrapper.style.color = bodyStyles.color || 'CanvasText';
        wrapper.style.font = bodyStyles.font || '14px system-ui';
        wrapper.style.boxSizing = 'border-box';
        const style = document.createElement('style');
        style.textContent = snapshotStyleText() + '\\nhtml,body,#root{overflow:visible!important;background:transparent!important}';
        wrapper.appendChild(style);
        const content = root.cloneNode(true);
        const sourceCanvases = Array.from(root.querySelectorAll('canvas'));
        const snapshotCanvases = Array.from(content.querySelectorAll('canvas'));
        sourceCanvases.forEach((canvas, index) => {
          const target = snapshotCanvases[index];
          if (!target) return;
          try {
            const dataUrl = canvas.toDataURL('image/png');
            if (!String(dataUrl || '').startsWith('data:image/')) return;
            const rect = canvas.getBoundingClientRect();
            const image = document.createElement('img');
            image.src = dataUrl;
            image.className = target.className || '';
            image.style.cssText = target.getAttribute('style') || '';
            image.setAttribute('alt', target.getAttribute('aria-label') || 'Canvas snapshot');
            const width = canvas.getAttribute('width') || String(canvas.width || Math.ceil(rect.width || 0));
            const height = canvas.getAttribute('height') || String(canvas.height || Math.ceil(rect.height || 0));
            if (Number(width) > 0) image.setAttribute('width', width);
            if (Number(height) > 0) image.setAttribute('height', height);
            target.replaceWith(image);
          } catch (_error) {}
        });
        wrapper.appendChild(content);
        const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        foreignObject.setAttribute('width', '100%');
        foreignObject.setAttribute('height', '100%');
        foreignObject.appendChild(wrapper);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('width', String(width));
        svg.setAttribute('height', String(height));
        svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
        svg.appendChild(foreignObject);
        return canvasDataUrlFromSerializedSvg(new XMLSerializer().serializeToString(svg), width, height, background);
      };
      const svgCandidate = directSvgSnapshotElement();
      if (svgCandidate) {
        const size = svgSnapshotSize(svgCandidate, width, height);
        canvasDataUrlFromSerializedSvg(serializeSvgForSnapshot(svgCandidate, size.width, size.height), size.width, size.height, background)
          .then(resolve)
          .catch(() => renderForeignObjectSnapshot().then(resolve).catch(reject));
        return;
      }
      renderForeignObjectSnapshot().then(resolve).catch(reject);
    } catch (error) {
      reject(error);
    }
  });
  const sanitizeAndRender = (html, final) => {
    const source = String(html || '');
    if (final && source.trim() && source === lastRenderedSource) {
      postSize();
      parent.postMessage({ type: 'visualize-widget:rendered', id: widgetId, hasContent: hasRenderedContent() }, '*');
      return;
    }
    const parsed = new DOMParser().parseFromString(source, 'text/html');
    const scripts = Array.from(parsed.querySelectorAll('script'));
    scripts.forEach((script) => script.remove());
    stripActiveContent(parsed);
    const headStyles = Array.from(parsed.head?.querySelectorAll('style') || []).map((node) => node.outerHTML).join('');
    const nextHtml = headStyles + (parsed.body ? parsed.body.innerHTML : source);
    if (!final && !htmlHasRenderedContent(nextHtml) && hasRenderedContent()) {
      postSize();
      parent.postMessage({ type: 'visualize-widget:rendered', id: widgetId, hasContent: true }, '*');
      return;
    }
    root.innerHTML = nextHtml;
    if (final && source.trim()) lastRenderedSource = source;
    const firstContent = visibleContentNodes()[0];
    if (firstContent) firstContent.setAttribute('data-visualize-root', '');
    installPlatformNormalize();
    normalizeSvgInk();
    postSize();
    parent.postMessage({ type: 'visualize-widget:rendered', id: widgetId, hasContent: hasRenderedContent() }, '*');
    if (!final || !source.trim() || source === lastExecuted) return;
    lastExecuted = source;
    const runScripts = async () => {
      for (const script of scripts) {
        const nextScript = document.createElement('script');
        nextScript.async = false;
        if (script.src) {
          if (!isAllowedResourceUrl(script.src)) continue;
          nextScript.src = script.src;
          await new Promise((resolve) => {
            nextScript.onload = resolve;
            nextScript.onerror = resolve;
            document.body.appendChild(nextScript);
          });
          continue;
        }
        nextScript.textContent = script.textContent || '';
        document.body.appendChild(nextScript);
      }
    };
    runScripts().finally(() => {
      requestAnimationFrame(postSize);
      setTimeout(postSize, 80);
      setTimeout(postSize, 300);
    });
    requestAnimationFrame(postSize);
    setTimeout(postSize, 80);
    setTimeout(postSize, 300);
  };
  window.addEventListener('message', (event) => {
    const data = event.data || {};
    if (data.id !== widgetId) return;
    if (data.type === 'visualize-widget:copy-snapshot') {
      buildSnapshotDataUrl()
        .then((dataUrl) => parent.postMessage({ type: 'visualize-widget:snapshot', id: widgetId, dataUrl }, '*'))
        .catch((error) => parent.postMessage({ type: 'visualize-widget:snapshot', id: widgetId, error: String(error?.message || error || 'snapshot failed') }, '*'));
      return;
    }
    if (data.type !== 'visualize-widget:update') return;
    applyHostCssVars(data.cssVars, data.theme);
    sanitizeAndRender(data.html, Boolean(data.final));
  });
  window.addEventListener('load', postSize);
  window.addEventListener('resize', postSize);
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(postSize);
    if (root) observer.observe(root);
  }
  if (root && typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => requestAnimationFrame(postSize));
    observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true });
  }
  parent.postMessage({ type: 'visualize-widget:ready', id: widgetId }, '*');
  requestAnimationFrame(postSize);
})();
`, r = "https://cdnjs.cloudflare.com https://esm.sh https://cdn.jsdelivr.net https://unpkg.com";
  return [
    "<!doctype html>",
    '<html lang="zh-CN">',
    "<head>",
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<meta http-equiv="Content-Security-Policy" content="${"default-src 'none'; script-src 'unsafe-inline' " + r + "; style-src 'unsafe-inline' " + r + "; img-src data: blob: " + r + "; media-src data: blob: " + r + "; font-src data: " + r + "; connect-src " + r + "; frame-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'"}">`,
    "<style>",
    vt,
    ut,
    "</style>",
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.34.1/dist/tabler-icons.min.css">',
    "</head>",
    "<body>",
    '<div id="root"></div>',
    "<script>",
    e,
    "<\/script>",
    "</body>",
    "</html>"
  ].join(`
`);
}, mt = (t) => t * 4, bt = 1e3, z = mt(12), $ = "正在生成可视化代码", ye = 1e3, pt = 8e3, ht = (t, e) => /* @__PURE__ */ L(t === "check" ? qe : t === "copy" ? Ke : t === "download" ? Ye : $e, { className: e.className || "visualize-widget-action-icon", "aria-hidden": "true", strokeWidth: 1.75 });
function St({
  title: t,
  code: e,
  exportCode: r,
  loadingMessage: n,
  loadingMessages: d,
  loadingDwellMs: l = ye,
  final: a,
  showActions: b = !0,
  onSendPrompt: v,
  renderIcon: p = ht,
  notify: u,
  writeImageToClipboard: K,
  theme: R,
  getTheme: Z,
  cssVarNames: U = nt
}) {
  const W = h(null), E = h(null), H = h(`visualize-widget-${Math.random().toString(36).slice(2)}`), [Se, Ce] = f(""), x = M(() => se(r || e), [e, r]), I = String(e || "").trim().length > 0, ce = M(() => rt(e), [e]), [le, _] = f(
    () => be(x) || z
  ), [ze, Y] = f(!1), [X, D] = f(!1), [J, Q] = f(!1), [Ee, de] = f(!1), [Ae, ve] = f(0), [ee, A] = f(() => !!(a && I)), [te, ue] = f(null), ge = h(""), j = h({ code: "", final: !1 }), O = h(null), V = h(""), P = h(a);
  P.current = a;
  const k = h(null), re = M(() => gt(H.current), []), me = M(() => st(R), [R]), ne = ot(R, Z), T = M(() => {
    const s = Array.isArray(d) ? d.map((o) => String(o || "").trim()).filter(Boolean) : [], i = String(n || "").trim();
    return !s.length && i && i !== $ && s.push(i), Array.from(new Set(s));
  }, [n, d]), Te = M(() => T.length ? T : [$], [T]), S = te || Te, Ne = S[Ae % S.length] || $, N = ee ? e : "", C = String(N || "").trim().length > 0, B = !C, Me = b && a && X && C, g = () => {
    var i;
    const s = (i = E.current) == null ? void 0 : i.contentWindow;
    s && s.postMessage({
      type: "visualize-widget:update",
      id: H.current,
      html: j.current.code,
      final: j.current.final,
      cssVars: ge.current,
      theme: ne
    }, "*");
  };
  y(() => {
    const s = W.current;
    if (!s) return;
    const i = it(window.getComputedStyle(s), U) + me;
    ge.current = i, Ce(i);
  }, [U, me]), y(() => {
    Y(!1), D(!1);
  }, [re]), y(() => {
    ve(0);
  }, [S]), y(() => {
    if (!te) {
      if (T.length) {
        ue(T);
        return;
      }
      I && ue([$]);
    }
  }, [I, te, T]), y(() => {
    if (!I) {
      A(!1);
      return;
    }
    if (l <= 0) {
      A(!0);
      return;
    }
    if (!ce && !a) {
      A(!1);
      return;
    }
    if (a) {
      A(!0);
      return;
    }
    if (ee) return;
    const s = l * S.length, i = window.setTimeout(() => A(!0), s);
    return () => window.clearTimeout(i);
  }, [S.length, a, I, ce, l, ee]), y(() => {
    if (!B || S.length <= 1) return;
    const s = window.setInterval(() => {
      ve((i) => i + 1);
    }, ye);
    return () => window.clearInterval(s);
  }, [S.length, B]), y(() => {
    const s = (i) => {
      var q;
      if (i.source !== ((q = E.current) == null ? void 0 : q.contentWindow)) return;
      const o = i.data || {};
      if (o.id !== H.current) return;
      if (o.type === "visualize-widget:ready") {
        Y(!0), g();
        return;
      }
      if (o.type === "visualize-widget:rendered") {
        const c = !!o.hasContent;
        D(c), !c && !P.current && A(!1);
        return;
      }
      if (o.type === "visualize-widget:snapshot") {
        const c = k.current;
        if (!c) return;
        if (window.clearTimeout(c.timer), k.current = null, o.error) {
          c.reject(new Error(String(o.error)));
          return;
        }
        c.resolve(String(o.dataUrl || ""));
        return;
      }
      if (o.type === "visualize-widget:send-prompt") {
        const c = String(o.prompt || "").trim().slice(0, 4e3);
        c && (v == null || v(c));
        return;
      }
      if (o.type !== "visualize-widget:size") return;
      if (o.hasContent === !1) {
        O.current = null, V.current = "", P.current || _((c) => c > z ? z : c);
        return;
      }
      const m = ke(Number(o.height) || 0, z);
      O.current = m, V.current = se(j.current.code), x && m > z && We(x, m), _((c) => Math.abs(c - m) <= 2 ? c : m);
    };
    return window.addEventListener("message", s), () => window.removeEventListener("message", s);
  }, [v, ne, x]), y(() => () => {
    const s = k.current;
    s && (window.clearTimeout(s.timer), k.current = null, s.reject(new Error("snapshot cancelled")));
  }, []), y(() => {
    if (P.current = a, !C || !X) {
      a || _((F) => F === z ? F : z), C || D(!1), C || (O.current = null, V.current = ""), j.current = { code: N, final: a }, g();
      const w = window.requestAnimationFrame(g), Ie = [
        window.setTimeout(g, 50),
        window.setTimeout(g, 200),
        window.setTimeout(g, 600)
      ];
      return () => {
        window.cancelAnimationFrame(w), Ie.forEach((F) => window.clearTimeout(F));
      };
    }
    const s = se(N), i = V.current === s ? O.current : null, o = x ? be(x) : null, m = i || o || tt(r || N, a);
    _((w) => Math.abs(w - m) <= 2 || !a && w > m ? w : m), C || D(!1), j.current = { code: N, final: a }, g();
    const q = window.requestAnimationFrame(g), c = [
      window.setTimeout(g, 50),
      window.setTimeout(g, 200),
      window.setTimeout(g, 600)
    ];
    return () => {
      window.cancelAnimationFrame(q), c.forEach((w) => window.clearTimeout(w));
    };
  }, [Se, N, r, a, C, ze, X, ne, x, re]);
  const Le = () => {
    Qe(Je(r || e, t), `${Xe(t)}.html`);
  }, Re = async (s) => new Promise((i, o) => {
    const m = window.setTimeout(() => {
      k.current && (k.current = null), o(new Error("snapshot timeout"));
    }, pt);
    k.current = { resolve: i, reject: o, timer: m }, s.postMessage({ type: "visualize-widget:copy-snapshot", id: H.current }, "*");
  });
  return /* @__PURE__ */ ae(
    "div",
    {
      ref: W,
      className: `visualize-widget-block${B ? " is-loading" : " is-ready"}${a ? " is-final" : " is-streaming"}`,
      "data-source-key": x,
      children: [
        Me ? /* @__PURE__ */ ae("div", { className: "visualize-widget-actions", "aria-label": "可视化预览操作", children: [
          /* @__PURE__ */ L("button", { className: `visualize-widget-action${J ? " is-copied" : ""}`, type: "button", "aria-label": "复制可视化截图", "data-tooltip": J ? "已复制截图" : "复制截图", onClick: async () => {
            var i;
            if (Ee) return;
            const s = (i = E.current) == null ? void 0 : i.contentWindow;
            if (!s) {
              u == null || u("复制截图失败", "error");
              return;
            }
            de(!0), Q(!1);
            try {
              const o = await Re(s);
              if (!o) throw new Error("empty snapshot");
              if (!await et(o, K)) throw new Error("clipboard unavailable");
              Q(!0), u == null || u("已复制到剪贴板", "success"), window.setTimeout(() => Q(!1), bt);
            } catch {
              u == null || u("复制截图失败", "error");
            } finally {
              de(!1);
            }
          }, children: p(J ? "check" : "copy", {}) }),
          /* @__PURE__ */ L("button", { className: "visualize-widget-action", type: "button", "aria-label": "导出 HTML", "data-tooltip": "导出 HTML", onClick: Le, children: p("download", {}) })
        ] }) : null,
        B ? /* @__PURE__ */ ae("div", { className: "visualize-widget-loading-inline", "aria-live": "polite", children: [
          p("code-xml", { className: "visualize-widget-loading-icon" }),
          /* @__PURE__ */ L("span", { className: "visualize-widget-loading-text", children: Ne })
        ] }) : /* @__PURE__ */ L(
          "div",
          {
            className: "visualize-widget-panel",
            style: {
              "--runtime-visualize-widget-height": `${le}px`,
              "--visualize-widget-height": `${le}px`
            },
            children: /* @__PURE__ */ L(
              "iframe",
              {
                ref: E,
                className: "visualize-widget-frame",
                title: t || "可视化预览",
                sandbox: "allow-scripts allow-forms",
                srcDoc: re,
                onLoad: () => {
                  Y(!0), window.requestAnimationFrame(g);
                }
              }
            )
          }
        )
      ]
    }
  );
}
export {
  kt as S,
  St as a
};
