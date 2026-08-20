import { ContentVariables } from './transformers';
type WhenValue = string | boolean | undefined;
type OrArray<T> = T | T[];
type OrArrayRecord<T> = Record<string, OrArray<T>>;
interface FilteredContentItem extends OrArrayRecord<FilteredContentItem> {
}
type FilteredContent = OrArray<FilteredContentItem>;
type FilterableContentItem = FilteredContentItem & {
    when: WhenValue;
};
export type FilterableContent = OrArray<FilterableContentItem>;
/**
 * Filters content recoursively by result of it's 'when' property evaluation applied to vars argument.
 * e.g. property {..., when: 'someVar == "someValue"' } will be included in result only if vars.someVar === 'someValue'
 * @param {FilterableContent} content
 * @param {ContentVariables} vars
 * @return {FilteredContent}
 */
export declare function filterContent(content: FilterableContent | FilteredContent, vars: ContentVariables): FilteredContent;
export {};
