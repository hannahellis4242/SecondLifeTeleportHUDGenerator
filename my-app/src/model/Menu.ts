import Option from "./Option";

export default class Menu {
  constructor(
    public id: string,
    public options: Option[],
    public parentId?: string,
    public message?: string,
    public collapsed: boolean = true
  ) {}
}
