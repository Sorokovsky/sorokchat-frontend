import { EnvironmentProviders } from "@angular/core";
import { provideRouter } from "@angular/router";
import { ROUTES } from "../router";

export const ROUTER_PROVIDER: EnvironmentProviders = provideRouter(ROUTES);
