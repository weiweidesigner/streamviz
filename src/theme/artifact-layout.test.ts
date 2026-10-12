import { afterEach, describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'

const css = readFileSync('src/theme/artifact-theme.css', 'utf8')
afterEach(() => { document.body.innerHTML = ''; document.head.innerHTML = '' })

describe('artifact layout ownership', () => {
  it.each(['hk', 'svw', 'random-model-wrapper'])('normalizes legacy cards inside %s', (name) => {
    document.head.innerHTML = `<style>.${name} .card{margin:24px 0;padding:30px}.group{gap:40px}</style><style>${css}</style>`
    document.body.innerHTML = `<main data-aime-streamviz-root><div class="${name}"><section class="card"><h2>Heading</h2><p>Description</p></section><div class="group"><section class="card">Nested</section></div></div></main>`
    const parent = document.querySelector(`.${name}`)!
    const card = parent.querySelector('.card')!
    expect(getComputedStyle(parent).display).toBe('grid')
    expect(getComputedStyle(card).display).toBe('flex')
    expect(parseFloat(getComputedStyle(card).getPropertyValue('margin-block'))).toBe(0)
    expect(getComputedStyle(card).gap).toBe('var(--sv-component-gap)')
    expect(parseFloat(getComputedStyle(card.querySelector('p')!).getPropertyValue('margin-block'))).toBe(0)
  })

  it('supports semantic markers without any generated class names', () => {
    document.head.innerHTML = `<style>${css}</style>`
    document.body.innerHTML = '<main data-aime-streamviz-root><div data-sv-layout="stack"><section data-sv-card><h2>Heading</h2><div data-sv-layout="components">Chart</div></section><div data-sv-layout="metrics"><article data-sv-metric>Metric</article></div></div></main>'
    expect(getComputedStyle(document.querySelector('[data-sv-layout="stack"]')!).display).toBe('grid')
    expect(getComputedStyle(document.querySelector('[data-sv-card]')!).display).toBe('flex')
    expect(getComputedStyle(document.querySelector('[data-sv-layout="metrics"]')!).gridTemplateColumns).toContain('auto-fit')
  })

  it('does not alter unrelated markup outside an artifact', () => {
    document.head.innerHTML = `<style>${css}</style>`
    document.body.innerHTML = '<div class="outside"><section class="card">Host content</section></div>'
    expect(getComputedStyle(document.querySelector('.outside')!).display).toBe('block')
    expect(getComputedStyle(document.querySelector('.card')!).display).toBe('block')
  })

  it('normalizes a card that is itself the runtime root', () => {
    document.head.innerHTML = `<style>${css}</style>`
    document.body.innerHTML = '<section class="card" data-visualize-root><h2>Heading</h2><p>Body</p></section>'
    expect(getComputedStyle(document.querySelector('.card')!).display).toBe('flex')
    expect(parseFloat(getComputedStyle(document.querySelector('p')!).getPropertyValue('margin-block'))).toBe(0)
  })
})
