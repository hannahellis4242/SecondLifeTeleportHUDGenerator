import Menu from "../Menu";
import Option from "../Option";

export const deepCopyOption = (option: Option, parentID?: string): Option => {
  if (option.action.menu) {
    const newMenu = deepCopyMenu(option.action.menu, parentID);
    const newAction = { menu: newMenu };
    return {
      id: option.id,
      rect: option.rect,
      label: option.label,
      action: newAction,
    };
  } else {
    return option;
  }
};

export const deepCopyMenu = (menu: Menu, parentID?: string): Menu => {
  const newOptions = menu.options.map((option) =>
    deepCopyOption(option, menu.id)
  );
  return new Menu(menu.id, newOptions, parentID, menu.message);
};
