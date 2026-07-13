import { CHATS_PAGE } from "@pages/chats";
import { authenticatedGuard } from "../../../guards";
import { Layout } from "@shared/types";
import { Path } from "@shared/util";

export const MAIN_LAYOUT: Layout = {
  path: Path.mainLayout.value,
  loadComponent: () => import("../ui").then((module) => module.MainLayout),
  children: [CHATS_PAGE],
  canActivateChild: [authenticatedGuard],
};
