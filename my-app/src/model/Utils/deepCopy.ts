import { v4 } from "uuid";
import Menu from "../Menu";
import Option from "../Option";

export const deepCopyOption = (option: Option, parentID?: string): Option => {
  if (option.action.menu) {
    const newMenu = deepCopyMenu(option.action.menu, parentID);
    const newAction = { menu: newMenu };
    return {
      id: v4().toString(),
      rect: option.rect,
      label: option.label,
      action: newAction,
    };
  } else {
    return option;
  }
};

export const deepCopyMenu = (menu: Menu, parentID?: string): Menu => {
  const newId = v4().toString();
  const newOptions = menu.options.map((option) =>
    deepCopyOption(option, newId)
  );
  return new Menu(newId, newOptions, parentID, menu.message);
};
