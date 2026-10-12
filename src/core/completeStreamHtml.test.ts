import { describe, expect, it } from 'vitest'
import { completeStreamHtml } from './completeStreamHtml'

describe('completed streaming components', () => {
  const head = '<style>.card{padding:30px}</style><main><div data-sv-layout="stack">'
  const first = '<section data-sv-card><h2>First</h2><p>Done</p></section>'
  it('does not release a half-card or incomplete style', () => {
    expect(completeStreamHtml('<style>.card{padding:30')).toBe('')
    expect(completeStreamHtml(head + '<section data-sv-card><h2>First</h2>')).not.toContain('First')
  })
  it('releases the first card while the next card is still streaming', () => {
    expect(completeStreamHtml(head + first + '<section data-sv-card><h2>Second')).toBe(head + first + '</div></main>')
  })
  it('preserves the first component throughout every prefix of the second', () => {
    const second = '<section class="card"><svg viewBox="0 0 100 100"><path d="M0 0L100 100"/></svg></section>'
    for (let i = 0; i < second.length; i++) {
      expect(completeStreamHtml(head + first + second.slice(0, i))).toBe(head + first + '</div></main>')
    }
    expect(completeStreamHtml(head + first + second)).toContain(second)
  })
  it('handles quoted angle brackets and raw CSS without parsing them as HTML', () => {
    const source = '<style>.x::after{content:"< >"}</style><section class="card" title="x > y"><p>Text</p></section>'
    expect(completeStreamHtml(source)).toBe(source)
  })
  it('does not change completed fragments', () => {
    const source = head + first + '</div></main>'
    expect(completeStreamHtml(source)).toBe(source)
  })
})
