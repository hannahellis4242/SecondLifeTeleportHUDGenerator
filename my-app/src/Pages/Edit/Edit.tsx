import { FunctionComponent, useContext } from "react";
import { ModelContext } from "../../store/ModelContext";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import EditMenu from "./EditMenu";
import Menu from "../../model/Menu";
import Option from "../../model/Option";
import EditOptionTag from "./EditOptionTag";

const findMenu = (menu: Menu, editId: string | null): Menu | null => {
  if (editId && menu.id === editId) {
    return menu;
  }
  const subMenu = menu.options
    .map(({ action }) => action.menu)
    .find((menu) => (menu ? findMenu(menu, editId) : false));
  return subMenu ? subMenu : null;
};

const findOption = (menu: Menu, editId: string | null): Option | null => {
  if (editId) {
    const child = menu.options.find(({ id }) => id === editId);
    if (child) {
      return child;
    }
    const subOption = menu.options
      .map(({ action }) => action.menu)
      .map((menu) => (menu ? findOption(menu, editId) : null))
      .find((x) => x !== null);
    return subOption ? subOption : null;
  }
  return null;
};

const Edit: FunctionComponent = () => {
  const { topMenu, editId } = useContext(ModelContext);
  const menu = findMenu(topMenu, editId);
  const option = findOption(topMenu, editId);
  return (
    <section>
      <Navigation active="Edit" />
      <Main>
        {menu ? (
          <EditMenu value={menu} />
        ) : option ? (
          <EditOptionTag value={option} fromMenu={false} />
        ) : (
          <section>Nothing to edit</section>
        )}
      </Main>
    </section>
  );
};

export default Edit;
