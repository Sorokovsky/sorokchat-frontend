import { Component, computed, input } from "@angular/core";
import { FieldState } from "@angular/forms/signals";
import { InputType } from "../../types";
import { Input } from "../input";
import { Label } from "../label";

@Component({
  selector: "app-field",
  imports: [Input, Label],
  templateUrl: "./field.html",
  styleUrl: "./field.scss",
})
export class Field {
  public readonly field = input.required<FieldState<string>>();
  public readonly placeholder = input.required<string>();
  public readonly type = input.required<InputType>();
  public readonly label = input.required<string>();

  protected readonly isValid = computed<boolean>(() => this.field().errors().length === 0);
}
