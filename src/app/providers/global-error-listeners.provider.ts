import { EnvironmentProviders, provideBrowserGlobalErrorListeners } from "@angular/core";

export const GLOBAL_ERROR_LISTENERS_PROVIDER: EnvironmentProviders =
  provideBrowserGlobalErrorListeners();
