import { describe, expect, it } from 'vitest'
import { buildRuntimeDocument } from './runtimeDocument'

describe('buildRuntimeDocument', () => {
  it('embeds shared mobile layout, compact spacing, and center-aligned chart points', () => {
    const document = buildRuntimeDocument('mobile-widget')

    expect(document).toContain('repeat(auto-fit,minmax(min(100%,150px),1fr))')
    expect(document).toContain('--sv-card-gap:16px;--sv-card-padding:12px;--sv-component-gap:8px')
    expect(document).toContain('transform:translate(-50%,-50%)')
    expect(document).toContain('box-sizing:border-box;padding-top:8px')
    expect(document).toContain('white-space:normal;overflow-wrap:anywhere')
  })

  it('renders the tool title inside the themed artifact and normalizes legacy light reports', () => {
    const document = buildRuntimeDocument('widget-test')

    expect(document).toContain('sanitizeAndRender(data.html, Boolean(data.final), data.title)')
    expect(document).toContain("data-visualize-title")
    expect(document).toContain('[data-theme="light"] :is([data-visualize-root].sv')
    expect(document).toContain('--bg:transparent!important')
    expect(document).toContain('[data-theme="dark"] [data-visualize-root] table')
    expect(document).toContain('td:first-child{color:var(--sv-text-secondary)!important}')
  })
})
