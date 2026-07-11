import { Component, input } from "@angular/core";
import { FieldState, FormField } from "@angular/forms/signals";

@Component({
  selector: "app-input",
  imports: [FormField],
  templateUrl: "./input.html",
  styleUrl: "./input.scss",
})
export class Input {
  public readonly field = input.required<FieldState<string>>();
  public readonly placeholder = input.required<string>();
  public readonly type = input.required<HTMLInputElement["type"]>();
}
