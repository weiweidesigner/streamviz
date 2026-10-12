import { describe, expect, it } from 'vitest'
import { completeStreamHtml } from './completeStreamHtml'

describe('progressive tag-safe streaming', () => {
  const head = '<style>.card{padding:30px}</style><main><div data-sv-layout="stack">'
  const first = '<section data-sv-card><h2>First</h2><p>Done</p></section>'
  it('buffers incomplete styles but shows titles before a card is finished', () => {
    expect(completeStreamHtml('<style>.card{padding:30')).toBe('')
    expect(completeStreamHtml(head + '<section data-sv-card><h2>First')).toContain('<h2>First</h2></section>')
  })
  it('releases the first card while the next card is still streaming', () => {
    const preview = completeStreamHtml(head + first + '<section data-sv-card><h2>Second')
    expect(preview).toContain(first)
    expect(preview).toContain('<h2>Second</h2></section>')
  })
  it('preserves the first component throughout every prefix of the second', () => {
    const second = '<section class="card"><svg viewBox="0 0 100 100"><path d="M0 0L100 100"/></svg></section>'
    for (let i = 0; i < second.length; i++) {
      expect(completeStreamHtml(head + first + second.slice(0, i))).toContain(first)
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
  it('does not send partial attributes to the browser', () => {
    expect(completeStreamHtml('<section data-sv-card><p>Text</p><svg viewBox="0 0')).toBe('<section data-sv-card><p>Text</p></section>')
  })
  it('reveals completed SVG marks before the chart is finished', () => {
    expect(completeStreamHtml('<section data-sv-card><svg viewBox="0 0 100 100"><path d="M0 0L100 100"/>')).toContain('<path d="M0 0L100 100"/></svg></section>')
  })
})
