export declare enum VideoExt {
    Mp4 = "mp4",
    Webm = "webm",
    Ogg = "ogg",
    Ogv = "ogv"
}
export declare enum VideoType {
    Mp4 = "video/mp4",
    Webm = "video/webm",
    Ogg = "video/ogg"
}
export interface ParsedVideo {
    src: string;
    type: VideoType | undefined;
}
export declare const getVideoTypesWithPriority: (sources: string[]) => ParsedVideo[];
