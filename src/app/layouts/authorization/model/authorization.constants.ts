import { LOGIN_PAGE } from "@pages/login";
import { Layout } from "@shared/model";

export const AUTHORIZATION_LAYOUT: Layout = {
  path: "authorization",
  children: [LOGIN_PAGE],
  loadComponent: () => import("../ui").then((module) => module.AuthorizationLayout),
  canActivatChild: undefined,
};
