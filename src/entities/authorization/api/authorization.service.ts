import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { LoginPayload } from "./login.schema";
import { RegisterPayload } from "./register.schema";
import { User } from "../../user/@x/authorization";
import { SERVER_URL } from "@shared/configs";

@Service()
export class AuthorizationService {
  private static readonly AUTHORIZATION: string = `${SERVER_URL}/authorization`;
  private static readonly REGISTER: string = `${AuthorizationService.AUTHORIZATION}/register`;
  private static readonly LOGIN: string = `${AuthorizationService.AUTHORIZATION}/login`;
  private static readonly PROFILE: string = `${AuthorizationService.AUTHORIZATION}/profile`;
  private static readonly LOGOUT: string = `${AuthorizationService.AUTHORIZATION}/logout`;

  private readonly http: HttpClient = inject(HttpClient);

  public async register(payload: RegisterPayload): Promise<void> {
    return await lastValueFrom(this.http.post<void>(AuthorizationService.REGISTER, payload));
  }

  public async login(payload: LoginPayload): Promise<void> {
    return await lastValueFrom(this.http.post<void>(AuthorizationService.LOGIN, payload));
  }

  public async profile(): Promise<User> {
    return await lastValueFrom(this.http.get<User>(AuthorizationService.PROFILE));
  }

  public async logout(): Promise<void> {
    return await lastValueFrom(this.http.delete<void>(AuthorizationService.LOGOUT));
  }
}
