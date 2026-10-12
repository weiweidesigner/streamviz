import { describe, expect, it } from 'vitest'
import { reconcileArtifactDom } from './reconcileArtifactDom'

describe('incremental artifact updates', () => {
  it('preserves cards, text nodes and SVG marks during progressive updates', () => {
    const root = document.createElement('div')
    root.innerHTML = '<section data-sv-card><p>H</p><svg><path d="M0 0"/></svg></section>'
    const card = root.firstChild, text = root.querySelector('p')!.firstChild, path = root.querySelector('path')
    const next = document.createElement('template')
    next.innerHTML = '<section data-sv-card><p>Hello</p><svg><path d="M0 0L10 10"/><circle cx="10"/></svg></section>'
    reconcileArtifactDom(root, next.content)
    expect(root.firstChild).toBe(card)
    expect(root.querySelector('p')!.firstChild).toBe(text)
    expect(text!.nodeValue).toBe('Hello')
    expect(root.querySelector('path')).toBe(path)
    expect(path!.getAttribute('d')).toBe('M0 0L10 10')
    expect(root.querySelector('circle')).not.toBeNull()
  })
  it('preserves runtime styles and removes obsolete content', () => {
    const root = document.createElement('div')
    root.innerHTML = '<p>Old</p><p>Remove</p><style data-visualize-platform-normalize></style>'
    const style = root.lastChild
    const next = document.createElement('template')
    next.innerHTML = '<p>New</p>'
    reconcileArtifactDom(root, next.content)
    expect(root.querySelectorAll('p')).toHaveLength(1)
    expect(root.lastChild).toBe(style)
  })
})
