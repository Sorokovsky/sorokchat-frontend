import { Component, input } from "@angular/core";
import { ButtonType } from "../../types";

@Component({
  selector: "app-button",
  imports: [],
  templateUrl: "./button.html",
  styleUrl: "./button.scss",
})
export class Button {
  public readonly type = input<ButtonType>("submit");
  public readonly disabled = input<boolean>(false);
}
