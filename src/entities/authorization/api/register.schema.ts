import { InferOutput, object, pick } from "valibot";
import { LoginSchema } from "./login.schema";
import { UserSchema } from "../../user/@x/authorization";

export const RegisterSchema = object({
  ...LoginSchema.entries,
  ...pick(UserSchema, ["displayName"]).entries,
});

export type RegisterPayload = InferOutput<typeof RegisterSchema>;
