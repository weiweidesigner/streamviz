type AnyRecord = Record<string, any>;
export declare const visualizeWidgetSourceKey: (value: unknown) => string;
export declare const getCachedVisualizeWidgetHeight: (key: string) => number | null;
export declare const setCachedVisualizeWidgetHeight: (key: string, value: number) => void;
export declare const extractPartialJsonString: (raw: string, key: string) => string;
export declare const extractPartialJsonStringArray: (raw: string, key: string) => string[];
export declare const extractVisualizeWidgetPayload: (tool?: AnyRecord) => {
    title: string;
    code: string;
    exportCode: string;
    loadingMessage: string;
    loadingMessages: string[];
    final: boolean;
    status: string;
};
export {};
