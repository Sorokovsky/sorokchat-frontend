import { computed, inject, Service, Signal } from "@angular/core";
import { Storage } from "./storage.api";
import { PersistanceStorage } from "./persistance-storage.service";
import { CacheStorage } from "./cache-storage.service";

@Service()
export class PwaStorage implements Storage {
  private readonly persistance: Storage = inject(PersistanceStorage);
  private readonly cache: Storage = inject(CacheStorage);

  public get<T>(key: string): Signal<T | null> {
    const cachedSignal = this.cache.get<T>(key);
    const persistanceSignal = this.persistance.get<T>(key);
    return computed<T | null>(() => {
      const cacheValue = cachedSignal();
      if (cacheValue !== null) return cacheValue;
      return persistanceSignal();
    });
  }

  public async set<T>(key: string, data: T): Promise<void> {
    await this.persistance.set(key, data);
    await this.cache.set(key, data);
  }

  public async delete(key: string): Promise<void> {
    await this.persistance.delete(key);
    await this.cache.delete(key);
  }

  public async clear(): Promise<void> {
    await this.persistance.clear();
    await this.cache.clear();
  }
}
