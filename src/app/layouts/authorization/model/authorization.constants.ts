import { LOGIN_PAGE } from "@pages/login";
import { REGISTER_PAGE } from "@pages/register";
import { Layout } from "@shared/types";

export const AUTHORIZATION_LAYOUT: Layout = {
  path: "authorization",
  children: [REGISTER_PAGE, LOGIN_PAGE],
  loadComponent: () => import("../ui").then((module) => module.AuthorizationLayout),
  canActivatChild: undefined,
};
