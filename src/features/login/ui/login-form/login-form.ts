import { Component } from "@angular/core";
import { injectLogin } from "../../api";
import { LoginPayload } from "@entities/authorization";
import { Form } from "@shared/ui";

@Component({
  selector: "app-login-form",
  imports: [Form],
  templateUrl: "./login-form.html",
  styleUrl: "./login-form.scss",
})
export class LoginForm {
  private readonly loginMutation = injectLogin();

  public login(payload: LoginPayload): void {
    console.log(payload);
  }
}
