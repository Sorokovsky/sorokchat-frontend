import { bootstrapApplication } from "@angular/platform-browser";
import { CONFIG } from "../configs";
import { App } from "./app";

bootstrapApplication(App, CONFIG).catch((err) => console.error(err));
