declare module 'gfscoute' {
    export function DownloadFont(fontName: string): Promise<void>;
    export function ScouteFont(fontName: string): Promise<boolean>;
};
