import Menu from "../Menu";
import { deepCopyMenu } from "./deepCopy";

const removeOptionRecursive = (menu: Menu, id: string) => {
  if (menu.options.some((x) => x.id === id)) {
    menu.options = menu.options.filter((x) => x.id !== id);
  } else {
    menu.options.forEach(({ action }) => {
      if (action.menu) {
        removeOptionRecursive(action.menu, id);
      }
    });
  }
};

export const removeOption = (menu: Menu, id: string) => {
  const menuCopy = deepCopyMenu(menu);
  removeOptionRecursive(menuCopy, id);
  return menuCopy;
};
