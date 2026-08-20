import { MarkdownItPluginCb } from '@diplodoc/transform/lib/plugins/typings';
import { ConstructorBlock } from '../models/constructor';
import { Lang } from './types';
export type ContentVariables = Record<string, string>;
export type ContentTransformerProps = {
    content: {
        blocks?: ConstructorBlock[];
    };
    options: {
        lang: Lang;
        customConfig?: {};
        vars?: ContentVariables;
        plugins?: MarkdownItPluginCb[];
    };
};
export declare const contentTransformer: ({ content, options }: ContentTransformerProps) => {
    blocks: ConstructorBlock[];
};
