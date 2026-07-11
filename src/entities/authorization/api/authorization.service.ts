import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { LoginPayload } from "./login.schema";
import { RegisterPayload } from "./register.schema";
import { User } from "../../user/@x/authorization";
import { injectApiUrl } from "@shared/config";

@Service()
export class AuthorizationService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = injectApiUrl();

  private readonly AUTHORIZATION: string = `${this.apiUrl}/authorization`;
  private readonly REGISTER: string = `${this.AUTHORIZATION}/register`;
  private readonly LOGIN: string = `${this.AUTHORIZATION}/login`;
  private readonly PROFILE: string = `${this.AUTHORIZATION}/profile`;
  private readonly LOGOUT: string = `${this.AUTHORIZATION}/logout`;

  public async register(payload: RegisterPayload): Promise<void> {
    return await lastValueFrom(this.http.post<void>(this.REGISTER, payload));
  }

  public async login(payload: LoginPayload): Promise<void> {
    return await lastValueFrom(this.http.post<void>(this.LOGIN, payload));
  }

  public async profile(): Promise<User> {
    return await lastValueFrom(this.http.get<User>(this.PROFILE));
  }

  public async logout(): Promise<void> {
    return await lastValueFrom(this.http.delete<void>(this.LOGOUT));
  }
}
