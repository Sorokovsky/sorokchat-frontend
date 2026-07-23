import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable, switchMap } from "rxjs";
import { AccessTokenService } from "./access-token.service";
import { inject } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";

export const accessTokenInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const accessTokenService: AccessTokenService = inject(AccessTokenService);
  const accessToken$ = toObservable(accessTokenService.get());
  return accessToken$.pipe(
    switchMap((token) => {
      if (token) {
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
      }
      return next(request);
    }),
  );
};
