import { FunctionComponent } from "react";
import AddMenuMenuOption from "./AddMenuMenuOption";
import AddRectangleMenuOption from "./AddRectangleMenuOption";

const AddMenuOption: FunctionComponent<{ menuID: string; top: boolean }> = ({
  menuID,
  top,
}) => {
  return (
    <section>
      <header>Add Menu Option</header>
      {top ? (
        <AddRectangleMenuOption menuID={menuID} />
      ) : (
        <AddMenuMenuOption menuID={menuID} />
      )}
    </section>
  );
};

export default AddMenuOption;
