import { PathKind, SchemaPath, validate } from "@angular/forms/signals";
import { valibotValidator } from "./valibot.validator";
import {
  BaseIssue,
  BaseSchema,
  ErrorMessage,
  ObjectEntries,
  ObjectIssue,
  ObjectSchema,
} from "valibot";

function isObjectSchema(
  schema: unknown,
): schema is ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue>> {
  return typeof schema === "object" && schema !== null && "entries" in schema;
}

export function withValibot<T>(
  schema: BaseSchema<T, unknown, BaseIssue<unknown>>,
  options: { abortEarly: boolean } = { abortEarly: false },
) {
  if (!isObjectSchema(schema)) throw new Error("withValibotForm: schema must be an object schema");
  return (fieldPath: SchemaPath<T, 1, PathKind.Root>) => {
    const entries = schema.entries;
    for (const key of Object.keys(entries)) {
      const fieldSchema = entries[key];
      const fieldPathForKey = (fieldPath as Record<string, unknown>)[key];
      if (fieldPathForKey) {
        validate(fieldPathForKey as SchemaPath<T>, valibotValidator(fieldSchema, options));
      }
    }
  };
}
