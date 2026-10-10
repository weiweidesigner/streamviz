export declare const safeExportName: (value: string) => string;
export declare const buildExportDocument: (source: string, title: string) => string;
export declare const downloadTextFile: (source: string, fileName: string) => void;
export declare const writePngDataUrlToClipboard: (dataUrl: string, writer?: (dataUrl: string) => Promise<boolean> | boolean) => Promise<boolean>;
