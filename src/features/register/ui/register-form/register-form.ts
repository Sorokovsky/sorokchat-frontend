import { Component, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { RegisterPayload, RegisterSchema } from "@entities/authorization";
import { withValibot } from "@shared/lib";
import { Form, Field, Button } from "@shared/ui";
import { RouterLink } from "@angular/router";
import { injectRegister } from "../../api";

@Component({
  selector: "app-register-form",
  imports: [Form, Field, Button, RouterLink],
  templateUrl: "./register-form.html",
  styleUrl: "./register-form.scss",
})
export class RegisterForm {
  private readonly state = signal<RegisterPayload>({ login: "", password: "", displayName: "" });
  protected readonly registerForm = form<RegisterPayload>(this.state, withValibot(RegisterSchema));
  private readonly registerMutation = injectRegister();

  public register(payload: RegisterPayload): void {
    this.registerMutation.mutate(payload);
  }
}
