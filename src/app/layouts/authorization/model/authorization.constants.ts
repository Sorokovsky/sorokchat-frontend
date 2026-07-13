import { anonymousGuard } from "../../../guards";
import { LOGIN_PAGE } from "@pages/login";
import { REGISTER_PAGE } from "@pages/register";
import { Layout } from "@shared/types";
import { Path } from "@shared/util";

export const AUTHORIZATION_LAYOUT: Layout = {
  path: Path.authorization.value,
  children: [REGISTER_PAGE, LOGIN_PAGE],
  loadComponent: () => import("../ui").then((module) => module.AuthorizationLayout),
  canActivateChild: [anonymousGuard],
};
