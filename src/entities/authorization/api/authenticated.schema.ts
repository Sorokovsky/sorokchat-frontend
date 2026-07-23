import { InferOutput, object, string } from "valibot";

export const AuthenticatedSchema = object({
  accessToken: string("Токен доступу має бути рядком"),
});

export type AuthenticatedPayload = InferOutput<typeof AuthenticatedSchema>;
