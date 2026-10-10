const h = /* @__PURE__ */ new Map(), _ = "visualize-widget-height:", S = "正在生成可视化代码", y = (n) => !!(n && typeof n == "object" && !Array.isArray(n)), I = (n) => {
  const t = String(n || "");
  if (!t) return "";
  let e = 2166136261;
  for (let r = 0; r < t.length; r += 1)
    e ^= t.charCodeAt(r), e = Math.imul(e, 16777619);
  return `${t.length}:${(e >>> 0).toString(36)}`;
}, A = (n) => {
  const t = String(n || "");
  if (!t) return null;
  const e = h.get(t);
  if (typeof e == "number" && Number.isFinite(e) && e > 0)
    return e;
  if (typeof window > "u" || !window.localStorage) return null;
  try {
    const r = Number(window.localStorage.getItem(`${_}${t}`));
    if (Number.isFinite(r) && r > 0)
      return h.set(t, r), r;
  } catch {
    return null;
  }
  return null;
}, $ = (n, t) => {
  const e = String(n || ""), r = Math.ceil(Number(t) || 0);
  if (!(!e || r <= 0) && (h.set(e, r), !(typeof window > "u" || !window.localStorage)))
    try {
      window.localStorage.setItem(`${_}${e}`, String(r));
    } catch {
    }
}, m = (n) => {
  let t = "";
  for (let e = 0; e < n.length; e += 1) {
    const r = n[e];
    if (r !== "\\") {
      t += r;
      continue;
    }
    const s = n[e + 1];
    if (!s) break;
    if (e += 1, s === "n") t += `
`;
    else if (s === "r") t += "\r";
    else if (s === "t") t += "	";
    else if (s === "b") t += "\b";
    else if (s === "f") t += "\f";
    else if (s === '"' || s === "\\" || s === "/") t += s;
    else if (s === "u") {
      const c = n.slice(e + 1, e + 5);
      if (/^[0-9a-fA-F]{4}$/.test(c))
        t += String.fromCharCode(Number.parseInt(c, 16)), e += 4;
      else
        break;
    } else
      t += s;
  }
  return t;
}, x = (n, t) => {
  const e = String(n || ""), r = `"${t}"`, s = e.indexOf(r);
  if (s < 0) return "";
  const c = e.indexOf(":", s + r.length);
  if (c < 0) return "";
  let i = c + 1;
  for (; i < e.length && /\s/.test(e[i]); ) i += 1;
  if (e[i] !== '"') return "";
  let l = !1, o = "";
  for (let a = i + 1; a < e.length; a += 1) {
    const u = e[a];
    if (l) {
      o += `\\${u}`, l = !1;
      continue;
    }
    if (u === "\\") {
      l = !0;
      continue;
    }
    if (u === '"') return m(o);
    o += u;
  }
  return l && (o += "\\"), m(o);
}, b = (n, t) => {
  const e = String(n || ""), r = `"${t}"`, s = e.indexOf(r);
  if (s < 0) return [];
  const c = e.indexOf(":", s + r.length);
  if (c < 0) return [];
  let i = c + 1;
  for (; i < e.length && /\s/.test(e[i]); ) i += 1;
  if (e[i] !== "[") return [];
  i += 1;
  const l = [];
  for (; i < e.length; ) {
    for (; i < e.length && /[\s,]/.test(e[i]); ) i += 1;
    if (e[i] === "]" || e[i] !== '"') break;
    i += 1;
    let o = !1, a = "", u = !1;
    for (; i < e.length; i += 1) {
      const f = e[i];
      if (o) {
        a += `\\${f}`, o = !1;
        continue;
      }
      if (f === "\\") {
        o = !0;
        continue;
      }
      if (f === '"') {
        u = !0, i += 1;
        break;
      }
      a += f;
    }
    o && (a += "\\");
    const w = m(a).trim();
    if (w && l.push(w), !u) break;
  }
  return l;
}, p = (n) => Array.isArray(n) ? n.map((t) => String(t || "").trim()).filter(Boolean) : [], d = (...n) => {
  for (const t of n)
    if (y(t)) return t;
  return {};
}, g = (...n) => {
  for (const t of n) {
    const e = String(t || "");
    if (e.trim()) return e;
  }
  return "";
}, z = (n = {}) => {
  const t = d(n.state), e = d(n.arguments, n.input, t.input, t.arguments), r = d(n.metadata, t.metadata), s = g(n.tool_raw_input, n.raw_input, n.raw, t.raw), c = g(n.tool_status, n.status, t.status).trim().toLowerCase(), i = g(r.widget_code, e.widget_code), l = i || x(s, "widget_code"), o = g(
    r.title,
    e.title,
    x(s, "title") || "可视化预览"
  ).trim(), a = [
    ...p(r.loading_messages),
    ...p(e.loading_messages),
    ...b(s, "loading_messages")
  ];
  return {
    title: o,
    code: l,
    exportCode: i || l,
    loadingMessage: a[0] || S,
    loadingMessages: a.length ? Array.from(new Set(a)) : [S],
    final: !!i && !["running", "pending", "queued", "in_progress", "executing"].includes(c),
    status: c
  };
};
export {
  x as extractPartialJsonString,
  b as extractPartialJsonStringArray,
  z as extractVisualizeWidgetPayload,
  A as getCachedVisualizeWidgetHeight,
  $ as setCachedVisualizeWidgetHeight,
  I as visualizeWidgetSourceKey
};
