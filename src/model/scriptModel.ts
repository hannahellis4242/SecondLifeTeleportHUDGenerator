export class Rect {
  constructor(
    public left: number,
    public bottom: number,
    public right: number,
    public top: number
  ) {}
}

export interface Action {
  label?: string;
  menu?: Menu;
}

export interface Option {
  rect?: Rect;
  label?: string;
  action: Action;
}

export default class Menu {
  constructor(public options: Option[], public message?: string) {}
}
