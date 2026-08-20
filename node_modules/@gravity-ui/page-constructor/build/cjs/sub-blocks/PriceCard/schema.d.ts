export declare const PriceCardBlock: {
    'price-card': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            theme: {
                type: string;
                enum: string[];
            };
            title: {
                type: string;
            };
            price: {
                type: string;
            };
            pricePeriod: {
                type: string;
            };
            priceDetails: {
                type: string;
            };
            description: {
                type: string;
            };
            buttons: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        text: {
                            type: string;
                            contentType: string;
                        };
                        url: {
                            type: string;
                        };
                        urlTitle: {
                            type: string;
                        };
                        primary: {
                            type: string;
                        };
                        size: {
                            type: string;
                            enum: string[];
                        };
                        theme: {
                            type: string;
                            enum: string[];
                        };
                        img: {
                            oneOf: ({
                                type: string;
                                optionName: string;
                                additionalProperties?: undefined;
                                required?: undefined;
                                properties?: undefined;
                            } | {
                                type: string;
                                additionalProperties: boolean;
                                required: string[];
                                properties: {
                                    data: {
                                        type: string;
                                    };
                                    position: {
                                        type: string;
                                        enum: string[];
                                    };
                                    alt: {
                                        type: string;
                                        contentType: string;
                                    };
                                };
                                optionName: string;
                            })[];
                        };
                        analyticsEvents: {
                            oneOf: ({
                                optionName: string;
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
                                items?: undefined;
                            } | {
                                type: string;
                                items: {
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
                                optionName: string;
                            })[];
                        };
                        target: {
                            type: string;
                            enum: string[];
                        };
                        width: {
                            type: string;
                            enum: string[];
                        };
                    };
                    if: {
                        properties: {
                            theme: {
                                enum: string[];
                            };
                        };
                    };
                    then: {
                        required: string[];
                    };
                    else: {
                        required: string[];
                    };
                };
            };
            links: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        text: {
                            type: string;
                            contentType: string;
                        };
                        url: {
                            type: string;
                        };
                        urlTitle: {
                            type: string;
                        };
                        arrow: {
                            type: string;
                        };
                        theme: {
                            type: string;
                            enum: string[];
                        };
                        textSize: {
                            type: string;
                            enum: string[];
                        };
                        target: {
                            type: string;
                            enum: string[];
                        };
                        analyticsEvents: {
                            oneOf: ({
                                optionName: string;
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
                                items?: undefined;
                            } | {
                                type: string;
                                items: {
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
                                optionName: string;
                            })[];
                        };
                        type: {};
                        when: {
                            type: string;
                        };
                    };
                };
            };
            backgroundColor: {
                type: string;
            };
            list: {
                type: string;
                items: {
                    type: string;
                };
            };
            controlPosition: {
                type: string;
                enum: string[];
            };
            border: {
                type: string;
                enum: string[];
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
