import { Route, Routes } from "@angular/router";
import { AUTHORIZATION_LAYOUT, MAIN_LAYOUT } from "../layouts";
import { Path } from "@shared/util";

export const BASE_ROUTE: Route = {
  path: "",
  redirectTo: Path.chats.fullPath.join(""),
  pathMatch: "full",
};

export const ROUTES: Routes = [BASE_ROUTE, AUTHORIZATION_LAYOUT, MAIN_LAYOUT];
