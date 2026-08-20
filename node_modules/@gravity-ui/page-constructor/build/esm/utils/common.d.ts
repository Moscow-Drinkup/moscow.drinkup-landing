export interface ScriptOptions {
    id: string;
    defer?: boolean;
    async?: boolean;
}
export declare function loadScript(src: string, { id, defer, async }: ScriptOptions): Promise<unknown>;
