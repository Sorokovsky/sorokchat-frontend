import { Component, signal } from "@angular/core";
import { injectLogin } from "../../api";
import { LoginPayload } from "@entities/authorization";
import { Form, Field, Button } from "@shared/ui";
import { form } from "@angular/forms/signals";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-login-form",
  imports: [Form, Field, Button, RouterLink],
  templateUrl: "./login-form.html",
  styleUrl: "./login-form.scss",
})
export class LoginForm {
  protected readonly loginForm = form<LoginPayload>(signal({ login: "", password: "" }));

  private readonly loginMutation = injectLogin();

  public login(payload: LoginPayload): void {
    console.log(payload);
  }
}
