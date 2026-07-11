import { Service } from "@angular/core";
import { Environment, EnvironmentSchema } from "./environment.schema";
import { parse } from "valibot";

@Service()
export class ConfigService {
  private readonly envrorenmet: Environment = parse(EnvironmentSchema, import.meta.env);

  public get(key: keyof Environment): Environment[keyof Environment] {
    return this.envrorenmet[key];
  }
}
