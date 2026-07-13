import { Page } from "@shared/types";
import { Path } from "@shared/util";

export const REGISTER_PAGE: Page = {
  path: Path.register.value,
  title: "Реєстрація",
  loadComponent: () => import("../ui").then((module) => module.RegisterPage),
};
