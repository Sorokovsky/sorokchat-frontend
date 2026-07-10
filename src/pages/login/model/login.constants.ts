import { Page } from "@shared/index";

export const LOGIN_PAGE: Page = {
  loadComponent: () => import("../ui").then((module) => module.LoginPage),
  path: "login",
  title: "Вхід",
};
