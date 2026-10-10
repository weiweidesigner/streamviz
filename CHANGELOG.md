# Changelog

## Unreleased

- Removed the renderer and height-cache caps so long reports are no longer clipped.
- Allowed final measurements to shrink after scripts settle, preventing stale blank space below artifacts.
- Observed streamed descendant mutations so overflowing or absolutely positioned content can update the iframe height.
- Normalized report roots to the full host width and removed legacy centered canvas gutters.
- Added a dark-theme compatibility layer for legacy `.sv` reports with fixed light surfaces, text, tables, badges, and SVG labels.
- Tightened authoring guidance for chart gutters, bar-label contrast, and connected line series.
- Added chart typography and long-category guidance to prevent fixed-viewBox SVG upscaling from making labels larger than titles or causing x-axis collisions.
- Added final-size guidance for non-scaling strokes, markers, bar thickness, and corner radii in responsive SVG charts.
- Added fixed vertical-rhythm guidance and HTML/CSS grid recommendations for long horizontal rankings on wide screens.

## 0.1.1

- Pointed the npm package homepage to the live StreamViz website and playground.

## 0.1.0

- Replaced browser-dependent runtime system colors with a stable light/dark semantic palette.
- Added a typed `theme` API for mode selection and safe semantic-token injection.
- Added stable public `--sv-*` tokens while retaining compatibility aliases for existing widgets and hosts.
- Added coordinated chart-series tokens and aligned model-facing chart guidance with them.
- Synchronized diagram ramp classes with the documented palette.
- Made theme fallback follow the user's system preference when the host does not provide a theme.
- Replaced fallback character actions with consistent Lucide loading, copy, download, and success icons.
- Wired the website showcase to each example's case-specific loading messages.
- Initial package extraction.
- Added `StreamVisualization` as the recommended public React API.
- Added `streamviz-react/styles.css` as the public stylesheet entrypoint.
- Added protocol helpers for visualization tools.
- Added streamed payload parsing helpers.
- Added sandboxed React iframe renderer.
- Added model-facing `visualize.readme.md` rules.
- Added package-level tests, bundle size reporting, benchmark script, example app, and CI workflow.
- Added React integration coverage for the recommended `StreamVisualization` API.
- Upgraded the basic example into a looping streamed tool-call demo.
- Added public export verification for package release safety.
- Added host integration guide for agent backend and React UI wiring.
- Added documentation-style demo site source and wired it into package checks.
- Added GitHub Pages workflow for the streamviz demo site.
- Extended issue and pull request templates for streamviz package work.
- Added headless Chrome browser test for the iframe runtime and `sendPrompt` bridge.
