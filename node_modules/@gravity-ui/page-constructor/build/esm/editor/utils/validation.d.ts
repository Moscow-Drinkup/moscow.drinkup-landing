import { ValidateFunction } from 'ajv';
import { JSONSchema4 } from 'json-schema';
export interface CodeEditorMessageProps {
    text: string;
    status: CodeEditorMessageStatus;
}
export declare enum CodeEditorMessageStatus {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
export declare function createValidator(schema: JSONSchema4): ValidateFunction<unknown>;
export declare function validate(content: string, validator: ValidateFunction): CodeEditorMessageProps;
