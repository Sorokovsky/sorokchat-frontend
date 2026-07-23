import { inject } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { Router, type CanActivateChildFn } from "@angular/router";
import { injectIsAuthenticated } from "@entities/authorization";
import { Path } from "@shared/util";
import { distinctUntilChanged, map } from "rxjs";

export const anonymousGuard: CanActivateChildFn = () => {
  const isAuthenticatedSignal = injectIsAuthenticated();
  const router = inject(Router);
  return toObservable(isAuthenticatedSignal).pipe(
    distinctUntilChanged(),
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        return true;
      }
      return router.createUrlTree(Path.chats.fullPath);
    }),
  );
};
