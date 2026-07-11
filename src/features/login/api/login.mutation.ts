import { inject } from "@angular/core";
import { AuthorizationService, LoginPayload } from "@entities/authorization";
import { injectMutation } from "@shared/lib";

export const LOGIN_KEY = "login";

export function injectLogin() {
  const authorizationService = inject(AuthorizationService);
  return injectMutation(
    [LOGIN_KEY],
    async (payload: LoginPayload) => await authorizationService.login(payload),
  );
}
