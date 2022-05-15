import { FunctionComponent, useContext } from "react";
import { ModelContext } from "../../store/ModelContext";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import EditMenu from "./EditMenu";
import Menu from "../../model/Menu";
import Option from "../../model/Option";
import EditOptionTag from "./EditOptionTag";

const isMenu = (item: Menu | undefined): item is Menu => {
  return !!item;
};

const findMenu = ([head, ...tail]: Menu[], editId: string): Menu | null => {
  if (head) {
    if (head.id === editId) {
      return head;
    }
    return findMenu(
      tail.concat(head.options.map(({ action }) => action.menu).filter(isMenu)),
      editId
    );
  }
  return null;
};

const findOption = (
  [head, ...tail]: Menu[],
  editId: string
): { parent: Menu; option: Option } | null => {
  if (head) {
    const result = head.options.find(({ id }) => id === editId);
    if (result) {
      return { parent: head, option: result };
    }
    return findOption(
      tail.concat(head.options.map(({ action }) => action.menu).filter(isMenu)),
      editId
    );
  }
  return null;
};

const Edit: FunctionComponent = () => {
  const { topMenu, editId } = useContext(ModelContext);
  const menu = editId ? findMenu([topMenu], editId) : null;
  const optionInfo = editId ? findOption([topMenu], editId) : null;
  return (
    <section>
      <Navigation active="Edit" />
      <Main>
        {menu ? (
          <EditMenu value={menu} />
        ) : optionInfo ? (
          <EditOptionTag value={optionInfo.option} />
        ) : (
          <section>Nothing to edit</section>
        )}
      </Main>
    </section>
  );
};

export default Edit;
