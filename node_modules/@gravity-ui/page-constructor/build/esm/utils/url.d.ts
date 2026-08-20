export type Query = Record<string, number | string | null>;
export declare const EXTERNAL_LINK_PROPS: {
    target: string;
    rel: string;
};
export declare function getLinkProps(url: string, hostname?: string, target?: string): {
    target: string | undefined;
};
export declare function isAbsoluteUrl(url: string | URL): boolean;
export declare function isLinkExternal(url: string, routerHostname?: string): boolean;
export declare function getNonLocaleHostName(hostname: string): string;
export declare function setUrlTld(url: string, tld?: string): string;
export declare const getPageSearchParams: (query?: Query) => URLSearchParams;
export declare function getAbsolutePath(hostname?: string, pathname?: string, url?: string): string;
