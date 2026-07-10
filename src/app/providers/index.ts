import { EnvironmentProviders, provideBrowserGlobalErrorListeners, Provider } from "@angular/core";
import { provideRouter } from "@angular/router";
import { ROUTES } from "../router";

export const PROVIDERS: (Provider | EnvironmentProviders)[] = [
  provideBrowserGlobalErrorListeners(),
  provideRouter(ROUTES),
];
