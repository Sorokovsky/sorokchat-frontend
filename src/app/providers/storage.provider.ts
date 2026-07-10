import { Provider } from "@angular/core";
import { CacheStorage, STORAGE_TOKEN } from "@shared/index";

export const STORAGE_PROVIDER: Provider = {
  provide: STORAGE_TOKEN,
  useClass: CacheStorage,
};
