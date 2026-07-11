import { inject, InjectionToken, Provider } from "@angular/core";
import { ConfigService } from "./config.service";

const API_URL = new InjectionToken<string>("API_URL");

export const API_URL_PROVIDER: Provider = {
  provide: API_URL,
  useFactory: () => {
    const configService = inject(ConfigService);
    return configService.get("NG_APP_API_URL");
  },
};

export function injectApiUrl() {
  return inject(API_URL);
}
