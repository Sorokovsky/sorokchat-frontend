import { inject } from "@angular/core";
import { AuthorizationService, PROFILE_KEY, RegisterPayload } from "@entities/authorization";
import { injectMutation } from "@shared/lib";

export const REGISTER_KEY = "register";

export function injectRegister() {
  const authorizationService = inject(AuthorizationService);
  return injectMutation(
    [REGISTER_KEY],
    async (payload: RegisterPayload) => await authorizationService.register(payload),
    [PROFILE_KEY],
  );
}
