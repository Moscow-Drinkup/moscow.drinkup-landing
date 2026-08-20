export declare const ShareBlock: {
    'share-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            title: {
                type: string;
            };
            items: {
                type: string;
                items: {
                    type: string;
                    enum: string[];
                };
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
