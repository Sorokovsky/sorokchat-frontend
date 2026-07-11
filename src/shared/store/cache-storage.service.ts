import { Service, signal, Signal, WritableSignal } from "@angular/core";
import { Storage } from "./storage.interface";

@Service()
export class CacheStorage implements Storage {
  private readonly cache = new Map<string, WritableSignal<unknown | null>>();

  public get<T>(key: string): Signal<T | null> {
    const cacheSignal = this.cache.get(key) as WritableSignal<T | null> | undefined;
    if (cacheSignal) return cacheSignal.asReadonly();
    const newSignal = signal<T | null>(null);
    this.cache.set(key, newSignal);
    return newSignal.asReadonly();
  }

  public async set<T>(key: string, data: T): Promise<void> {
    const cacheSignal = this.cache.get(key) as WritableSignal<T | null> | undefined;
    if (cacheSignal) {
      cacheSignal.set(data);
    } else {
      const newSignal = signal<T | null>(data);
      this.cache.set(key, newSignal);
    }
  }

  public async delete(key: string): Promise<void> {
    const oldSignal = this.cache.get(key);
    if (oldSignal) oldSignal.set(null);
  }

  public async clear(): Promise<void> {
    this.cache.forEach((oldSignal) => oldSignal.set(null));
  }
}
