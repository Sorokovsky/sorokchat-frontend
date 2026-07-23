export class Path {
  private static readonly INDEX: string = "/";
  private static readonly ALL: string = "*";
  private static readonly AUTHORIZATION: string = "authorization";
  private static readonly LOGIN: string = "login";
  private static readonly REGISTER: string = "register";
  private static readonly CHATS: string = "chats";

  private readonly path: string;
  private readonly rootPath?: Path;

  constructor(path: string, root?: Path) {
    this.path = path;
    this.rootPath = root;
  }

  public get value(): string {
    if (this.path === "*") return "";
    else return this.path;
  }

  public get fullPath(): string[] {
    if (!this.rootPath) return [this.value];
    else return [...this.rootPath.fullPath, this.value].filter((path) => path !== "");
  }

  public static get index(): Path {
    return new Path(this.INDEX);
  }

  public static get authorization(): Path {
    return new Path(Path.AUTHORIZATION, Path.index);
  }

  public static get register(): Path {
    return new Path(this.REGISTER, this.authorization);
  }

  public static get login(): Path {
    return new Path(this.LOGIN, this.authorization);
  }

  public static get mainLayout(): Path {
    return new Path(this.ALL, this.index);
  }

  public static get chats(): Path {
    return new Path(this.CHATS, this.mainLayout);
  }
}
