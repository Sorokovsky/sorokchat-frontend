import { Provider } from "@angular/core";
import { PwaStorage, STORAGE_TOKEN } from "@shared/index";

export const STORAGE_PROVIDER: Provider = {
  provide: STORAGE_TOKEN,
  useClass: PwaStorage,
};
