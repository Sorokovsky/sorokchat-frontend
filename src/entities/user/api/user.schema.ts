import { object, InferOutput, pipe, string, number, nonEmpty } from "valibot";

export const UserSchema = object({
  id: pipe(number()),
  login: pipe(string(), nonEmpty("Логін має бути")),
  displayName: pipe(string()),
});

export type User = InferOutput<typeof UserSchema>;
