/** Render completed components, not the browser's auto-repaired half-card DOM. */
export function completeStreamHtml(source: string): string {
  const html = String(source || '')
  if (!html.includes('<')) return html
  const lower = html.toLowerCase()
  const stack: Array<{ tag: string; boundary: boolean }> = []
  const voids = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'])
  let safe = 0
  let closers: string[] = []
  let offset = 0
  while (offset < html.length) {
    const top = stack.at(-1)
    const start = top && ['style', 'script', 'textarea', 'title'].includes(top.tag)
      ? lower.indexOf(`</${top.tag}`, offset) : html.indexOf('<', offset)
    if (start < 0) break
    if (html.startsWith('<!--', start)) {
      const end = html.indexOf('-->', start + 4)
      if (end < 0) break
      offset = end + 3
      continue
    }
    let end = start + 1
    let quote = ''
    for (; end < html.length; end++) {
      const char = html[end]
      if (quote) { if (char === quote) quote = '' }
      else if (char === '"' || char === "'") quote = char
      else if (char === '>') break
    }
    if (end === html.length) break
    const token = html.slice(start, end + 1)
    const match = token.match(/^<\s*(\/?)\s*([a-z][\w:-]*)\b/i)
    offset = end + 1
    if (!match) continue
    const tag = match[2].toLowerCase()
    if (match[1]) {
      // Only explicitly balanced HTML is released. Final HTML is never buffered.
      if (stack.at(-1)?.tag !== tag) continue
      stack.pop()
    } else if (!voids.has(tag) && !/\/\s*>$/.test(token)) {
      const classes = token.match(/\bclass\s*=\s*(["'])(.*?)\1/i)?.[2].split(/\s+/) || []
      const boundary = ['svg', 'table'].includes(tag) || /\bdata-sv-(?:card|metric)\b/i.test(token)
        || classes.some((name) => ['card', 'sv-card', 'metric', 'sv-metric'].includes(name))
      stack.push({ tag, boundary })
      continue
    }
    if (!stack.some((entry) => entry.boundary)) {
      safe = offset
      closers = stack.map((entry) => entry.tag).reverse()
    }
  }
  return safe ? html.slice(0, safe) + closers.map((tag) => `</${tag}>`).join('') : ''
}
