import { ValidationResult, ValidationError } from "@angular/forms/signals";
import { BaseIssue, BaseSchema, safeParse } from "valibot";

export function valibotValidator<T>(
  schema: BaseSchema<T, unknown, BaseIssue<unknown>>,
  options: { abortEarly: boolean },
): (context: { value: () => T }) => ValidationResult<ValidationError> {
  return ({ value }) => {
    const result = safeParse(schema, value(), options);
    if (result.success) return null;
    const errors = result.issues.map((issue) => {
      const path = issue.path?.map((p) => String(p.key)) ?? ["_root"];
      return {
        path,
        message: issue.message,
        kind: issue.kind ?? "validation",
      };
    });
    return errors;
  };
}
