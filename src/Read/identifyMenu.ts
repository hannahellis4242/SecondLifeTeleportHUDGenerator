import { v4 } from "uuid";
import Menu from "../model/scriptModel";

const identifyMenu = (menu: Menu) => {
  if (!menu.id) {
    menu.id = v4().toString();
  }
  menu.options.forEach(({ action }) => {
    if (action.menu) {
      identifyMenu(action.menu);
    }
  });
};

export default identifyMenu;
