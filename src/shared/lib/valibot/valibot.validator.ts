import { BaseIssue, BaseSchema, safeParse } from "valibot";

export function valibotValidator<T>(
  schema: BaseSchema<T, unknown, BaseIssue<unknown>>,
  options?: { abortEarly?: boolean },
) {
  return ({ value }: { value: () => T }) => {
    const result = safeParse(schema, value(), options);
    if (result.success) return null;
    const errors: Record<string, { message: string }[]> = {};
    for (const issue of result.issues) {
      const path = issue.path?.map((p) => String(p.key)).join(".") || "_root";
      if (!errors[path]) {
        errors[path] = [];
      }
      errors[path].push({ message: issue.message });
    }
    return errors;
  };
}
