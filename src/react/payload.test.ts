import { describe, expect, it } from 'vitest'
import { normalizeStreamVisualizationPayload, repairStreamedHtml } from './payload'

describe('host payload normalization', () => {
  it('renders incomplete streamed tool arguments without waiting for final JSON', () => {
    const props = normalizeStreamVisualizationPayload({
      toolRawInput: '{"title":"Revenue","loading_messages":["Preparing"],"widget_code":"<divclass=\\"card\\">Part',
    })
    expect(props.title).toBe('Revenue')
    expect(props.code).toBe('<div class="card">Part')
    expect(props.loadingMessages).toEqual(['Preparing'])
    expect(props.final).toBe(false)
    expect(props.smoothStreaming).toBe(true)
  })

  it('preserves explicit source and export code while accepting host aliases', () => {
    const props = normalizeStreamVisualizationPayload({
      code: '<p>Saved</p>', rawArguments: '{"widget_code":"ignored"}',
      export_code: '<p>Export</p>', loading_messages: ['Loading'],
      localSmooth: false, loadingDwellMs: 50, final: true,
    })
    expect(props.code).toBe('<p>Saved</p>')
    expect(props.exportCode).toBe('<p>Export</p>')
    expect(props.loadingDwellMs).toBe(50)
    expect(props.smoothStreaming).toBe(false)
    expect(props.final).toBe(true)
  })

  it('repairs transport whitespace without executing or removing untrusted source', () => {
    expect(repairStreamedHtml('<svgviewBox="00320320"><rectwidth="20"height="40" /></svg>'))
      .toBe('<svg viewBox="0 0 320 320"><rect width="20" height="40" /></svg>')
    expect(repairStreamedHtml('<script>window.payload=1</script>'))
      .toBe('<script>window.payload=1</script>')
  })
})
