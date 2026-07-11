import { Service } from "@angular/core";
import { Environment, EnvironmentSchema } from "./environment.schema";
import { safeParse } from "valibot";

@Service()
export class ConfigService {
  private readonly envrorenmet: Environment;

  constructor() {
    const { success, output, issues } = safeParse(EnvironmentSchema, this.getEnvironment());
    if (success) this.envrorenmet = output;
    else {
      throw new Error("Помилка валідаці: " + JSON.stringify(issues));
    }
  }

  public get(key: keyof Environment): Environment[keyof Environment] {
    return this.envrorenmet[key];
  }

  private getEnvironment(): Env {
    return {
      NG_APP_API_URL: import.meta.env["NG_APP_API_URL"],
      NODE_ENV: import.meta.env["NODE_ENV"],
    };
  }
}
