import Menu, { Option } from "../../model/scriptModel";

const getMenu = ({ action }: Option) => action.menu;
const isMenu = (item?: Menu): item is Menu => {
  return !!item;
};

const flattenMenu = (menu: Menu): Menu[] => {
  const childMenus = menu.options
    .map(getMenu)
    .filter(isMenu)
    .flatMap(flattenMenu);
  return [menu].concat(childMenus);
};

export default flattenMenu;
