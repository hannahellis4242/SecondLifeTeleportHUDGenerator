export class Rect {
  constructor(
    public left: number,
    public bottom: number,
    public right: number,
    public top: number
  ) {}
}

export class TeleportAction {
  constructor(public label: string) {}
}

export class MenuAction {
  constructor(public menu: Menu) {}
}

type Action = TeleportAction | MenuAction;

export class HUDOption {
  constructor(public rect: Rect, public action: Action) {}
}

export class MenuOption {
  constructor(public label: string, public action: Action) {}
}

type Option = HUDOption | MenuOption;

export default class Menu {
  constructor(public options: Option[], public message?: string) {}
}
