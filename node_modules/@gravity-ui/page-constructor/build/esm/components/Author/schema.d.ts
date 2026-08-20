export declare const author: {
    author: {
        additionalProperties: boolean;
        required: string[];
        properties: {
            asides: {};
            author: {
                type: string;
                required: string[];
                properties: {
                    firstName: {
                        type: string;
                        contentType: string;
                    };
                    secondName: {
                        type: string;
                        contentType: string;
                    };
                    avatar: {
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
                    description: {
                        type: string;
                        contentType: string;
                    };
                };
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
