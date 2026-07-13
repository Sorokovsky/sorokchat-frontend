import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { injectIsAuthenticated } from "@entities/authorization";
import { Path } from "@shared/util";

export const authenticatedGuard: CanActivateChildFn = () => {
  const isAuthenticated = injectIsAuthenticated();
  const router = inject(Router);
  if (isAuthenticated()) return true;
  return router.createUrlTree(Path.login.fullPath);
};
