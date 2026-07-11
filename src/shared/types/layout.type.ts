import { Route } from "@angular/router";
import { Page } from "./page.type";

export interface Layout {
  path: Route["path"];
  children: (Layout | Page)[];
  canActivatChild: Route["canActivateChild"];
  loadComponent: Route["loadComponent"];
}
