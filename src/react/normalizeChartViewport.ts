// Run after every DOM reconciliation, before measuring or painting the frame.
// Generated scripts remain deferred until final; chart sizing is platform work.
export function normalizeChartViewport(root: ParentNode | null) {
  root?.querySelectorAll<SVGSVGElement>('svg[viewBox]').forEach(svg => {
    if (svg.closest('svg svg') || !svg.querySelector('text') ||
        !svg.querySelector('rect,polyline,path,line,circle')) return
    const box = svg.getAttribute('viewBox')?.trim().split(/[\s,]+/).map(Number)
    if (!box || box.length !== 4 || !box.every(Number.isFinite) || box[2] <= 0 || box[3] <= 0) return
    // A 720px drawing must not become a 1600px drawing, including its labels,
    // merely because it is streamed into a wide report column. Still shrink
    // to the available width on small screens and keep authored aspect ratio.
    svg.style.setProperty('max-width', `min(100%, ${box[2]}px)`, 'important')
    svg.style.setProperty('max-height', `${box[3]}px`, 'important')
  })
}
