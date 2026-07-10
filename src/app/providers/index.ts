import { EnvironmentProviders, provideBrowserGlobalErrorListeners, Provider } from "@angular/core";
import { provideRouter } from "@angular/router";
import { ROUTES } from "../router";
import { STORAGE_PROVIDER } from "@shared/index";

export const PROVIDERS: (Provider | EnvironmentProviders)[] = [
  provideBrowserGlobalErrorListeners(),
  provideRouter(ROUTES),
  STORAGE_PROVIDER,
];
