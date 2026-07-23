import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthorizationService } from "@entities/authorization";
import { ErrorPayload } from "@shared/types";
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from "rxjs";

let refreshSubject: BehaviorSubject<string | null> | null = null;

export const refreshTokenInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const authorizationService: AuthorizationService = inject(AuthorizationService);
  if (request.url.includes(authorizationService.REFRESH_TOKENS)) {
    return next(request);
  }
  return next(request).pipe(
    catchError((error) => {
      if (!(error instanceof HttpErrorResponse)) {
        return throwError(() => error);
      }
      const payload = error.error as ErrorPayload | undefined;
      if (payload?.status !== 401 || error.headers.get("WWW-Authenticate") !== "Bearer") {
        return throwError(() => error);
      }
      if (!refreshSubject) {
        refreshSubject = new BehaviorSubject<string | null>(null);
        authorizationService.refreshTokens().subscribe({
          next: ({ accessToken }) => {
            refreshSubject?.next(accessToken);
            refreshSubject?.complete();
            refreshSubject = null;
          },
          error: (error) => {
            refreshSubject?.error(error);
            refreshSubject = null;
          },
        });
      }
      return refreshSubject.pipe(
        filter((token): token is string => token !== null),
        take(1),
        switchMap((token) => {
          const newRequest = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
          });
          return next(newRequest);
        }),
        catchError(() => {
          return throwError(() => error);
        }),
      );
    }),
  );
};
