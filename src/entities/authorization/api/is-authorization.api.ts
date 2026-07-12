import { computed } from "@angular/core";
import { injectProfile } from "./profile.query";

export function injectIsAuthenticated() {
  const profile = injectProfile();
  return computed<boolean>(() => profile.data() !== undefined);
}
