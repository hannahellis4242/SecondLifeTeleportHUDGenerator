import React, { useContext } from "react";
import { ModelContext } from "../store/ModelContext";
import Main from "./Main";
import Navigation from "./Navigation";
import MenuTag from "./MenuTag";
import Menu from "../model/Menu";

const findMenu = (menu: Menu, editId: string | null): Menu | null => {
  if (editId && menu.id === editId) {
    return menu;
  }
  const subMenu = menu.options
    .map(({ action }) => action.menu)
    .find((menu) => (menu ? findMenu(menu, editId) : false));
  return subMenu ? subMenu : null;
};

const Edit: React.FC = () => {
  const { topMenu, editId } = useContext(ModelContext);
  const menu = findMenu(topMenu, editId);
  return (
    <section>
      <Navigation active="Home" />
      <Main>{menu ? <MenuTag value={menu} /> : null}</Main>
    </section>
  );
};

export default Edit;
