import { describe, expect, it } from 'vitest'
import { normalizeChartViewport } from './normalizeChartViewport'

describe('streaming chart viewport', () => {
  it('constrains chart geometry and labels on every delta without running generated scripts', () => {
    const root = document.createElement('div')
    const prefix = '<svg viewBox="0 0 720 300" style="width:100%;height:auto"><rect x="30" y="40" width="20" height="200"/><text>1500</text><text>0</text>'
    root.innerHTML = prefix + '</svg>'
    normalizeChartViewport(root)
    const svg = root.querySelector('svg')!
    expect(svg.style.maxWidth).toBe('min(100%, 720px)')
    expect(svg.style.maxHeight).toBe('300px')
    expect(svg.style.getPropertyPriority('max-width')).toBe('important')
    const rect = svg.querySelector('rect')!.outerHTML
    // Reconciliation may restore the authored style on the next streamed delta.
    svg.setAttribute('style', 'width:100%;height:auto')
    svg.insertAdjacentHTML('beforeend', '<text>27</text>')
    normalizeChartViewport(root)
    expect(svg.style.maxWidth).toBe('min(100%, 720px)')
    expect(svg.querySelectorAll('text')).toHaveLength(3)
    expect(svg.querySelector('rect')!.outerHTML).toBe(rect)
  })
  it('leaves icons, incomplete viewports and non-chart diagrams alone', () => {
    const root = document.createElement('div')
    root.innerHTML = '<svg viewBox="0 0 24 24"><path d="M0 0L24 24"/></svg><svg viewBox="0 0 0 300"><rect/><text>A</text><text>B</text></svg><svg viewBox="0 0 100 100"><circle/></svg>'
    normalizeChartViewport(root)
    expect(root.querySelector('[style]')).toBeNull()
  })
})
