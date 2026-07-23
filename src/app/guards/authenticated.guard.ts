import { inject } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { CanActivateChildFn, Router } from "@angular/router";
import { injectIsAuthenticated } from "@entities/authorization";
import { Path } from "@shared/util";
import { distinctUntilChanged, map } from "rxjs";

export const authenticatedGuard: CanActivateChildFn = () => {
  const isAuthenticatedSignal = injectIsAuthenticated();
  const router = inject(Router);
  return toObservable(isAuthenticatedSignal).pipe(
    distinctUntilChanged(),
    map((isAuthenticated) => {
      if (isAuthenticated) return true;
      return router.createUrlTree(Path.login.fullPath);
    }),
  );
};
