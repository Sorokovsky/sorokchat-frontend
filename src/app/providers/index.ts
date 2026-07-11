import { EnvironmentProviders, Provider } from "@angular/core";
import { STORAGE_PROVIDER } from "@shared/api";
import { ROUTER_PROVIDER } from "./router.provider";
import { GLOBAL_ERROR_LISTENERS_PROVIDER } from "./global-error-listeners.provider";
import { HTTP_PROVIDER } from "./http.provider";
import { QUERY_PROVIDER } from "./query.provider";

export const PROVIDERS: (Provider | EnvironmentProviders | Provider[])[] = [
  GLOBAL_ERROR_LISTENERS_PROVIDER,
  ROUTER_PROVIDER,
  STORAGE_PROVIDER,
  HTTP_PROVIDER,
  QUERY_PROVIDER,
];
