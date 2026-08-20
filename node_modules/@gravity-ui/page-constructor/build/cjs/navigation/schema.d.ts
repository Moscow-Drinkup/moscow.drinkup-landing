export declare const LogoProps: {
    type: string;
    additionalProperties: boolean;
    required: string[];
    properties: {
        icon: {
            oneOf: ({
                type: string;
                properties: {
                    when: {
                        type: string;
                    };
                };
            } | {
                type: string;
                pattern: string;
                optionName: string;
                items?: undefined;
            } | {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
                optionName: string;
                pattern?: undefined;
            })[];
        };
        text: {
            type: string;
            contentType: string;
        };
        url: {
            type: string;
        };
    };
};
export declare const NavigationHeaderProps: {
    type: string;
    additionalProperties: boolean;
    required: string[];
    properties: {
        leftItems: {
            oneOf: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            }[];
        };
        rightItems: {
            oneOf: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            }[];
        };
        iconSize: {
            type: string;
        };
    };
};
