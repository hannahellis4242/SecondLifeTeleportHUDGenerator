import Option from "./Option";

export default class Menu {
  constructor(
    public id: string,
    public options: Option[],
    public message?: string
  ) {}
}
