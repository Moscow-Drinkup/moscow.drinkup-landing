export declare const AnalyticsEventSchema: {
    type: string;
    additionalProperties: {
        type: string;
    };
    required: string[];
    properties: {
        name: {
            type: string;
        };
        type: {
            type: string;
        };
        counters: {
            type: string;
            additionalProperties: boolean;
            required: never[];
            properties: {
                include: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
                exclude: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
            };
        };
        context: {
            type: string;
        };
    };
};
