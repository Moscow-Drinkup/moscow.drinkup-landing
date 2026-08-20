/** @deprecated */
export declare const PriceDetailedBlock: {
    'price-detailed': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            items: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            };
            description: {
                additionalProperties: boolean;
                required: never[];
                properties: {
                    titleSize: {
                        type: string;
                        enum: string[];
                    };
                    descriptionSize: {
                        type: string;
                        enum: string[];
                    };
                    titleColor: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            details: {
                additionalProperties: boolean;
                required: never[];
                properties: {
                    titleSize: {
                        type: string;
                        enum: string[];
                    };
                    descriptionSize: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            priceType: {
                type: string;
                enum: string[];
                default: string;
            };
            numberGroupItems: {
                type: string;
                enum: number[];
            };
            isCombined: {
                type: string;
            };
            useMixedView: {
                type: string;
            };
            foldable: {
                additionalProperties: boolean;
                required: string[];
                properties: {
                    title: {
                        type: string;
                        contentType: string;
                    };
                    size: {
                        type: string;
                        enum: string[];
                    };
                    titleColor: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            labelsDefaultText: {
                additionalProperties: boolean;
                required: never[];
                properties: {};
            };
            animated: {
                type: string;
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
