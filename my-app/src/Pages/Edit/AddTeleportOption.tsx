import { FunctionComponent } from "react";
import AddMenuTeleportOption from "./AddMenuTeleportOption";
import AddRectangleTeleportOption from "./AddRectangleTeleportOption";

const AddTeleportOption: FunctionComponent<{
  menuID: string;
  top: boolean;
}> = ({ menuID, top }) => {
  return (
    <section>
      <header>Add Teleport Option</header>
      {top ? (
        <AddRectangleTeleportOption menuID={menuID} />
      ) : (
        <AddMenuTeleportOption menuID={menuID} />
      )}
    </section>
  );
};

export default AddTeleportOption;
