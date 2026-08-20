export declare enum MapApiStatus {
    NotStarted = "not_started",
    Loading = "loading",
    Loaded = "loaded",
    Error = "error"
}
export declare class YMapsApiLoader {
    static status: MapApiStatus;
    static loader: Promise<unknown>;
    static loadApi(apiKey: string, scriptSrc: string, lang: 'ru' | 'en', nonce?: string): Promise<unknown>;
}
