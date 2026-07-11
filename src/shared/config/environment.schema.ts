import { object, string, pipe, url, InferOutput } from "valibot";

export const EnvironmentSchema = object({
  NG_APP_API_URL: pipe(
    string("Адрес сервера має бути рядком"),
    url("Адрес сервера має бути посиланням"),
  ),
});

export type Environment = InferOutput<typeof EnvironmentSchema>;
