import { InferOutput, maxLength, minLength, nonEmpty, object, pick, pipe, string } from "valibot";
import { UserSchema } from "../../user/@x/authorization";

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 100;

export const LoginSchema = object({
  ...pick(UserSchema, ["login"]).entries,
  password: pipe(
    string(),
    nonEmpty("Пароль має бути"),
    minLength(MIN_PASSWORD_LENGTH, `Мінімальна довжина паролю: ${MIN_PASSWORD_LENGTH} символів`),
    maxLength(MAX_PASSWORD_LENGTH, `Максимальна довжина паролю: ${MAX_PASSWORD_LENGTH}`),
  ),
});

export type LoginPayload = InferOutput<typeof LoginSchema>;
