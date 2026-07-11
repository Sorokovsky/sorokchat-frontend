import { inject, InjectionToken, Provider, Signal } from "@angular/core";
import { PwaStorage } from "./pwa-storage.service";

export interface Storage {
  get<T>(key: string): Signal<T | null>;
  set<T>(key: string, data: T): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}

const STORAGE_TOKEN = new InjectionToken<Storage>("STORAGE");
export const STORAGE_PROVIDER: Provider = {
  provide: STORAGE_TOKEN,
  useClass: PwaStorage,
};

export function injectStorage(): Storage {
  return inject(STORAGE_TOKEN);
}
