import { Service, Signal } from "@angular/core";
import { injectStorage, Storage } from "@shared/store";

@Service()
export class AccessTokenService {
  private static readonly KEY: string = "access-token";

  private readonly storage: Storage = injectStorage();

  public get(): Signal<string | null> {
    return this.storage.get<string>(AccessTokenService.KEY);
  }

  public async set(token: string): Promise<void> {
    return await this.storage.set(AccessTokenService.KEY, token);
  }

  public async delete(): Promise<void> {
    return await this.storage.delete(AccessTokenService.KEY);
  }
}
