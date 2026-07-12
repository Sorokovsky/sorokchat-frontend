import { Component, signal } from "@angular/core";
import { injectLogin } from "../../api";
import { LoginPayload, LoginSchema } from "@entities/authorization";
import { Form, Field, Button } from "@shared/ui";
import { form } from "@angular/forms/signals";
import { RouterLink } from "@angular/router";
import { withValibot } from "@shared/lib";

@Component({
  selector: "app-login-form",
  imports: [Form, Field, Button, RouterLink],
  templateUrl: "./login-form.html",
  styleUrl: "./login-form.scss",
})
export class LoginForm {
  private readonly state = signal<LoginPayload>({ login: "", password: "" });
  protected readonly loginForm = form<LoginPayload>(this.state, withValibot(LoginSchema));
  private readonly loginMutation = injectLogin();

  public login(payload: LoginPayload): void {
    this.loginMutation.mutate(payload);
  }
}
