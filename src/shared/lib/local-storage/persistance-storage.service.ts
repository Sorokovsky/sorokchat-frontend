import { inject, Service, Signal } from "@angular/core";
import { Storage } from "../../store/storage.interface";
import { StorageMap } from "@ngx-pwa/local-storage";
import { toSignal } from "@angular/core/rxjs-interop";
import { lastValueFrom, map } from "rxjs";

@Service()
export class PersistanceStorage implements Storage {
  private readonly storage: StorageMap = inject(StorageMap);

  public get<T>(key: string): Signal<T | null> {
    return toSignal(this.storage.get(key).pipe(map((value) => (value as T | null) ?? null)), {
      initialValue: null,
    }) as Signal<T | null>;
  }

  public async set<T>(key: string, data: T): Promise<void> {
    await lastValueFrom(this.storage.set(key, data));
  }
  public async delete(key: string): Promise<void> {
    await lastValueFrom(this.storage.delete(key));
  }
  public async clear(): Promise<void> {
    await lastValueFrom(this.storage.clear());
  }
}
