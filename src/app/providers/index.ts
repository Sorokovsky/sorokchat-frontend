import { EnvironmentProviders, Provider } from "@angular/core";
import { STORAGE_PROVIDER } from "@shared/index";
import { ROUTER_PROVIDER } from "./router.provider";
import { GLOBAL_ERROR_LISTENERS_PROVIDER } from "./global-error-listeners.provider";

export const PROVIDERS: (Provider | EnvironmentProviders)[] = [
  GLOBAL_ERROR_LISTENERS_PROVIDER,
  ROUTER_PROVIDER,
  STORAGE_PROVIDER,
];
