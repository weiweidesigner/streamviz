import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import {
  PROJECT_VISUALIZE_README_RELATIVE_PATH,
  VISUALIZE_README_FILE,
  VISUALIZE_READ_ME_TOOL_NAME,
  VISUALIZE_SHOW_WIDGET_TOOL_NAME,
  VISUALIZE_TYPES,
  VISUALIZE_WIDGET_CODE_DESCRIPTION,
  VISUALIZE_WIDGET_KIND,
  VISUALIZE_WIDGET_MODE,
  buildVisualizeReadMeMetadata,
  buildVisualizeReadMeOutput,
  buildVisualizeReadMeTitle,
  buildVisualizeShowWidgetOutput,
  buildVisualizeSystemPrompt,
  buildVisualizeWidgetMetadata,
  fallbackVisualizeReadme,
} from './index'

describe('streamviz protocol', () => {
  it('exposes stable tool names and visualization types', () => {
    expect(VISUALIZE_READ_ME_TOOL_NAME).toBe('visualize_read_me')
    expect(VISUALIZE_SHOW_WIDGET_TOOL_NAME).toBe('visualize_show_widget')
    expect(VISUALIZE_TYPES).toEqual(['diagram', 'chart', 'interactive', 'mockup', 'art'])
    expect(VISUALIZE_README_FILE).toBe('visualize.readme.md')
    expect(PROJECT_VISUALIZE_README_RELATIVE_PATH).toBe('.opencode/visualize/readme.md')
  })

  it('builds the model-facing system prompt around the visualization tools', () => {
    const prompt = buildVisualizeSystemPrompt()

    expect(prompt).toContain('Platform visualization protocol')
    expect(prompt).toContain(VISUALIZE_READ_ME_TOOL_NAME)
    expect(prompt).toContain(VISUALIZE_SHOW_WIDGET_TOOL_NAME)
    expect(prompt).toContain('diagram, chart, interactive, mockup, art')
    expect(VISUALIZE_WIDGET_CODE_DESCRIPTION).toContain('approved CDN resources')
  })

  it('builds readme outputs and metadata', () => {
    expect(buildVisualizeReadMeTitle('chart')).toBe('Loaded visualize rules: chart')
    expect(buildVisualizeReadMeOutput({
      type: 'chart',
      content: 'Rules for {{type}}',
    })).toBe('<visualize_read_me type="chart">\nRules for chart\n</visualize_read_me>')
    expect(buildVisualizeReadMeMetadata({
      type: 'chart',
      source: 'package',
    })).toEqual({ type: 'chart', source: 'package' })
  })

  it('builds widget metadata and final tool output', () => {
    const metadata = buildVisualizeWidgetMetadata({
      title: 'Risk Matrix',
      widget_code: '<section>Risk</section>',
      loading_messages: ['Preparing matrix'],
    })

    expect(metadata).toEqual({
      kind: VISUALIZE_WIDGET_KIND,
      title: 'Risk Matrix',
      widget_code: '<section>Risk</section>',
      loading_messages: ['Preparing matrix'],
      mode: VISUALIZE_WIDGET_MODE,
    })
    const output = buildVisualizeShowWidgetOutput('Risk Matrix')
    expect(output).toContain('已展示可视化预览：Risk Matrix')
    expect(output).toContain('正常回复')
  })

  it('ships fallback readme guidance for hosts without the markdown asset', () => {
    expect(fallbackVisualizeReadme).toContain('# Visualize Widget Rules')
    expect(fallbackVisualizeReadme).toContain(VISUALIZE_SHOW_WIDGET_TOOL_NAME)
  })

  it('keeps chart guidance on the shared runtime palette', () => {
    const readme = readFileSync('src/protocol/visualize.readme.md', 'utf8')

    expect(readme).toContain('--sv-chart-series-')
    expect(readme).toContain('Do not invent per-chart hex colors')
    expect(readme).toContain('bar edge touching the zero/category axis square')
    expect(readme).toContain('round only its free outer end')
    expect(readme).toContain('Vertical positive bars round only the top')
    expect(readme).toContain('vertical negative bars round only the bottom')
    expect(readme).toContain('Place the legend below the plot by default')
    expect(readme).toContain('outside the SVG/canvas')
    expect(readme).not.toContain('Use hardcoded hex or Chart.js defaults')
  })
})
