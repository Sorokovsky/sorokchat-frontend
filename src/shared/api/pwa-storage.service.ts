import { computed, inject, Service, Signal } from "@angular/core";
import { Storage } from "./storage.api";
import { PersistanceStorage } from "./persistance-storage.service";
import { CacheStorage } from "./cache-storage.service";

@Service()
export class PwaStorage implements Storage {
  private readonly persistance: Storage = inject(PersistanceStorage);
  private readonly cache: Storage = inject(CacheStorage);
  private readonly pendingUpdates = new Set<string>();

  public get<T>(key: string): Signal<T | null> {
    const cachedSignal = this.cache.get<T>(key);
    const persistanceSignal = this.persistance.get<T>(key);
    const result = computed<T | null>(() => {
      const cacheValue = cachedSignal();
      if (cacheValue !== null) return cacheValue;
      return persistanceSignal();
    });
    if (!this.pendingUpdates.has(key)) {
      this.pendingUpdates.add(key);
      queueMicrotask(() => {
        const cachedValue = cachedSignal();
        const persistanceValue = persistanceSignal();
        if (cachedValue === null && persistanceValue !== null) {
          this.cache.set(key, persistanceValue).finally(() => this.pendingUpdates.delete(key));
        } else {
          this.pendingUpdates.delete(key);
        }
      });
    }
    return result;
  }

  public async set<T>(key: string, data: T): Promise<void> {
    await this.cache.set(key, data);
    await this.persistance.set(key, data);
  }

  public async delete(key: string): Promise<void> {
    await this.cache.delete(key);
    await this.persistance.delete(key);
  }

  public async clear(): Promise<void> {
    await this.cache.clear();
    await this.persistance.clear();
  }
}
