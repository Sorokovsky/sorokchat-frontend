import { Route } from "@angular/router";
import { Page } from "./page.model";

export interface Layout {
  path: Route["path"];
  children: (Layout | Page)[];
  canActivatChild: Route["canActivateChild"];
  loadComponent: Route["loadComponent"];
}
