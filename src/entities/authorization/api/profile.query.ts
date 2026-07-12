import { inject } from "@angular/core";
import { injectQuery } from "@shared/lib";
import { AuthorizationService } from "./authorization.service";

export const PROFILE_KEY = "profile";

export function injectProfile() {
  const authorizationService = inject(AuthorizationService);
  return injectQuery([PROFILE_KEY], async () => await authorizationService.profile());
}
