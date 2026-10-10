export declare const VISUALIZE_TYPES: readonly ["diagram", "chart", "interactive", "mockup", "art"];
export type VisualizeType = (typeof VISUALIZE_TYPES)[number];
export declare const VISUALIZE_READ_ME_TOOL_NAME = "visualize_read_me";
export declare const VISUALIZE_SHOW_WIDGET_TOOL_NAME = "visualize_show_widget";
export declare const VISUALIZE_WIDGET_KIND = "visualize_widget";
export declare const VISUALIZE_WIDGET_MODE = "iframe";
export declare const VISUALIZE_README_FILE = "visualize.readme.md";
export declare const PROJECT_VISUALIZE_README_RELATIVE_PATH = ".opencode/visualize/readme.md";
export declare const VISUALIZE_TYPE_DESCRIPTION = "The visualization module to read: diagram, chart, interactive, mockup, or art.";
export declare const VISUALIZE_LOADING_MESSAGES_DESCRIPTION = "Required short loading messages to show before widget_code starts streaming. Provide at most 3 messages.";
export declare const VISUALIZE_WIDGET_CODE_DESCRIPTION = "Complete HTML/SVG widget source. Follow the loaded visualization rules for styling, scripts, and approved CDN resources.";
export declare const VISUALIZE_WIDGET_TITLE_DESCRIPTION = "Short widget title, also used as the export filename.";
export declare const VISUALIZE_READ_ME_TOOL_DESCRIPTION = "Read visualization design rules before creating a widget.";
export declare const VISUALIZE_SHOW_WIDGET_TOOL_DESCRIPTION = "Render a self-contained HTML/SVG visualization widget in the chat iframe artifact renderer.";
export declare const fallbackVisualizeReadme: string;
export declare function buildVisualizeSystemPrompt(): string;
export declare function buildVisualizeReadMeTitle(type: VisualizeType | string): string;
export declare function buildVisualizeReadMeOutput(input: {
    type: VisualizeType | string;
    content: string;
}): string;
export declare function buildVisualizeReadMeMetadata(input: {
    type: VisualizeType | string;
    source: string;
}): {
    type: string;
    source: string;
};
export type VisualizeWidgetInput = {
    title: string;
    widget_code: string;
    loading_messages: readonly string[];
};
export declare function buildVisualizeShowWidgetOutput(title: string): string;
export declare function buildVisualizeWidgetMetadata(input: VisualizeWidgetInput): {
    readonly kind: "visualize_widget";
    readonly title: string;
    readonly widget_code: string;
    readonly loading_messages: readonly string[];
    readonly mode: "iframe";
};
