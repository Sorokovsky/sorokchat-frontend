import { Page } from "@shared/types";

export const LOGIN_PAGE: Page = {
  loadComponent: () => import("../ui").then((module) => module.LoginPage),
  path: "login",
  title: "Вхід",
};
