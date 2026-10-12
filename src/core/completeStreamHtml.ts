/** Show progressive text and complete tags; buffer only partial tags/raw CSS. */
export function completeStreamHtml(source: string): string {
  const html = String(source || '')
  if (!html.includes('<')) return html
  const lower = html.toLowerCase()
  const stack: string[] = []
  const voids = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'])
  let safe = 0
  let closers: string[] = []
  let offset = 0
  while (offset < html.length) {
    const top = stack.at(-1)
    const raw = top && ['style', 'script', 'textarea', 'title'].includes(top)
    const start = raw ? lower.indexOf(`</${top}`, offset) : html.indexOf('<', offset)
    if (!raw && (start < 0 || start > offset)) {
      safe = start < 0 ? html.length : start
      closers = [...stack].reverse()
    }
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
      if (stack.at(-1) !== tag) continue
      stack.pop()
    } else if (!voids.has(tag) && !/\/\s*>$/.test(token)) {
      stack.push(tag)
      if (['style', 'script', 'textarea', 'title'].includes(tag)) continue
    }
    safe = offset
    closers = [...stack].reverse()
  }
  return safe ? html.slice(0, safe) + closers.map((tag) => `</${tag}>`).join('') : ''
}
