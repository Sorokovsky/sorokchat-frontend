import { LOGIN_PAGE } from "@pages/index";
import { Layout } from "@shared/index";

export const AUTHORIZATION_LAYOUT: Layout = {
  path: "authorization",
  children: [LOGIN_PAGE],
  loadComponent: () => import("../ui").then((module) => module.AuthorizationLayout),
  canActivatChild: undefined,
};
