import { Page } from "@shared/types";
import { Path } from "@shared/util";

export const LOGIN_PAGE: Page = {
  loadComponent: () => import("../ui").then((module) => module.LoginPage),
  path: Path.login.value,
  title: "Вхід",
};
