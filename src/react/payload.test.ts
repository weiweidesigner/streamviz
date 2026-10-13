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

describe('financial market conventions', () => {
  it.each([['A股市场', 'CN', '--sv-loss'], ['港股市场', 'HK', '--sv-loss'], ['US stocks', 'US', '--sv-gain']])('uses local direction for %s', (label, market, up) => {
    const props = normalizeStreamVisualizationPayload({code: `<p>${label}</p>`});
    expect(props.code).toContain(`data-financial-market="${market}"`);
    expect(props.code).toContain(`--sv-price-up:var(${up})`);
    expect(props.exportCode).toBe(props.code);
  });
  it('keeps full-document market metadata when the renderer extracts body fragments', () => {
    const code = '<html data-financial-market="CN"><body><b style="color:var(--sv-price-up)">+2%</b></body></html>';
    const props = normalizeStreamVisualizationPayload({code});
    expect(props.code).toContain(':root{--sv-price-up:var(--sv-loss)!important');
    expect(props.exportCode).toBe(props.code);
  });
  it('preserves independently marked mixed markets and non-financial status colors', () => {
    const code = '<section data-financial-market="HK">港股</section><section data-financial-market="US">美股</section>';
    expect(normalizeStreamVisualizationPayload({code}).code).toBe(code);
    expect(normalizeStreamVisualizationPayload({code:'<b style="color:var(--sv-status-success)">Ready</b>'}).code)
      .toBe('<b style="color:var(--sv-status-success)">Ready</b>');
  });
});
