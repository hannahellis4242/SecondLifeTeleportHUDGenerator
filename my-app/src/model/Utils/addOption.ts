import Menu from "../Menu";
import Option from "../Option";
import { deepCopyMenu } from "./deepCopy";

const addOptionRecursive = (menu: Menu, id: string, option: Option) => {
  if (menu.id === id) {
    menu.options.push(option);
  } else {
    menu.options.forEach(({ action }) => {
      if (action.menu) {
        addOptionRecursive(action.menu, id, option);
      }
    });
  }
};

export const addOption = (menu: Menu, id: string, option: Option) => {
  const menuCopy = deepCopyMenu(menu);
  addOptionRecursive(menuCopy, id, option);
  return menuCopy;
};
