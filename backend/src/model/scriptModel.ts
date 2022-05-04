import { v4 } from "uuid";

export class Rect {
  constructor(
    public left: number,
    public bottom: number,
    public right: number,
    public top: number
  ) {}
}

export interface Action {
  destination?: string;
  menu?: Menu;
}

export interface Option {
  rect?: Rect;
  label?: string;
  action: Action;
}

export default class Menu {
  public id: string;
  constructor(public options: Option[], public message?: string) {
    this.id = v4().toString();
  }
}
