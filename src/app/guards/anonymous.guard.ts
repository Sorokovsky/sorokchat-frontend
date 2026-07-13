import { inject } from "@angular/core";
import { Router, type CanActivateChildFn } from "@angular/router";
import { injectIsAuthenticated } from "@entities/authorization";
import { Path } from "@shared/util";

export const anonymousGuard: CanActivateChildFn = () => {
  const isAuthenticated = injectIsAuthenticated();
  const router = inject(Router);
  if (!isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(Path.mainLayout.fullPath);
};
