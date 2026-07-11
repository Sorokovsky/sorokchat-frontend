import { Page } from "@shared/model";

export const LOGIN_PAGE: Page = {
  loadComponent: () => import("../ui").then((module) => module.LoginPage),
  path: "login",
  title: "Вхід",
};
