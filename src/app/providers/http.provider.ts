import {
  HttpErrorResponse,
  HttpInterceptorFn,
  provideHttpClient,
  withInterceptors,
} from "@angular/common/http";
import { EnvironmentProviders } from "@angular/core";
import { accessTokenInterceptor, refreshTokenInterceptor } from "@entities/access-token";
import { catchError, throwError } from "rxjs";
import { ErrorPayload } from "@shared/types";

export const errorHandleingInterceptor: HttpInterceptorFn = (request, next) => {
  return next(request).pipe(
    catchError((error) => {
      if (!(error instanceof HttpErrorResponse)) {
        return throwError(() => error);
      }
      const payload: ErrorPayload = error.error;
      return throwError(() => payload);
    }),
  );
};

export const HTTP_PROVIDER: EnvironmentProviders = provideHttpClient(
  withInterceptors([accessTokenInterceptor, refreshTokenInterceptor, errorHandleingInterceptor]),
);
