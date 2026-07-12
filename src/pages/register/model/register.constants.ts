import { Page } from "@shared/types";

export const REGISTER_PAGE: Page = {
  path: "register",
  title: "Реєстрація",
  loadComponent: () => import("../ui").then((module) => module.RegisterPage),
};
