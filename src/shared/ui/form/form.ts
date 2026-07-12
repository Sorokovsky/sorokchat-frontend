import { Component, input, output } from "@angular/core";
import { FieldTree } from "@angular/forms/signals";

@Component({
  selector: "app-form",
  imports: [],
  templateUrl: "./form.html",
  styleUrl: "./form.scss",
})
export class Form<T> {
  public readonly form = input.required<FieldTree<T>>();
  public readonly send = output<T>();

  public submit(event: Event): void {
    event.preventDefault();
    this.send.emit(this.form()().value());
  }
}
