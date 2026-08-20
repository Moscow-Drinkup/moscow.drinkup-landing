export interface ObjectSchema extends Record<string, unknown> {
    properties: object;
}
export declare const filteredItem: (itemsSchema: ObjectSchema) => {
    type: string;
    properties: {
        when: {
            type: string;
        };
    };
};
export declare const filteredArray: (itemsSchema: ObjectSchema) => {
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
