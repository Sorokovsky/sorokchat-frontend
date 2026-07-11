import { Route } from "@angular/router";

export interface Page {
  path: Route["path"];
  loadComponent: Route["loadComponent"];
  title: Route["title"];
}
