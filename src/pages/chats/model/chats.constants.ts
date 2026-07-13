import { Page } from "@shared/types";
import { Path } from "@shared/util";

export const CHATS_PAGE: Page = {
  loadComponent: () => import("../ui").then((module) => module.ChatsPage),
  path: Path.chats.value,
  title: "Чати",
};
