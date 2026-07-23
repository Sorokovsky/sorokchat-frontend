import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { LoginPayload } from "./login.schema";
import { RegisterPayload } from "./register.schema";
import { User } from "../../user/@x/authorization";
import { injectApiUrl } from "@shared/config";
import { AuthenticatedPayload } from "./authenticated.schema";
import { AccessTokenService } from "../../access-token/@x/authorization";

@Service()
export class AuthorizationService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = injectApiUrl();
  private readonly accessTokenService: AccessTokenService = inject(AccessTokenService);

  private readonly AUTHORIZATION: string = `${this.apiUrl}/authorization`;
  private readonly REGISTER: string = `${this.AUTHORIZATION}/register`;
  private readonly LOGIN: string = `${this.AUTHORIZATION}/login`;
  private readonly PROFILE: string = `${this.AUTHORIZATION}/profile`;
  private readonly LOGOUT: string = `${this.AUTHORIZATION}/logout`;

  public async register(payload: RegisterPayload): Promise<void> {
    const { accessToken } = await lastValueFrom(
      this.http.post<AuthenticatedPayload>(this.REGISTER, payload),
    );
    await this.accessTokenService.set(accessToken);
  }

  public async login(payload: LoginPayload): Promise<void> {
    const { accessToken } = await lastValueFrom(
      this.http.post<AuthenticatedPayload>(this.LOGIN, payload),
    );
    await this.accessTokenService.set(accessToken);
  }

  public async profile(): Promise<User> {
    return await lastValueFrom(this.http.get<User>(this.PROFILE));
  }

  public async logout(): Promise<void> {
    await lastValueFrom(this.http.delete<void>(this.LOGOUT));
    await this.accessTokenService.delete();
  }
}
