import { DEFAULT_THEME } from '../components/constants';
export interface ThemedValue<T> extends Partial<Record<string, T>> {
    [DEFAULT_THEME]: T;
}
export type ThemeSupporting<T> = T | ThemedValue<T>;
export declare function isThemedValue<T>(value: ThemeSupporting<T>): value is ThemedValue<T>;
export declare function getThemedValue<T>(value: ThemeSupporting<T>, theme?: import("../models").Theme): T;
