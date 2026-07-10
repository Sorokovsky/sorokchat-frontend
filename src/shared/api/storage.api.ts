import { InjectionToken, Signal } from "@angular/core";

export interface Storage {
  get<T>(key: string): Signal<T | null>;
  set<T>(key: string, data: T): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}

export const STORAGE_TOKEN = new InjectionToken<Storage>("STORAGE");
