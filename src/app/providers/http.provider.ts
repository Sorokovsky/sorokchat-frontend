import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { EnvironmentProviders } from "@angular/core";
import { accessTokenInterceptor, refreshTokenInterceptor } from "@entities/access-token";

export const HTTP_PROVIDER: EnvironmentProviders = provideHttpClient(
  withInterceptors([accessTokenInterceptor, refreshTokenInterceptor]),
);
