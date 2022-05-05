import React from "react";
import AddRectangleTeleportOption from "./AddRectangleTeleportOption";

const AddTeleportOption: React.FC<{ menuID: string; top: boolean }> = ({
  menuID,
  top,
}) => {
  return (
    <section>
      <header>Add Teleport Option</header>
      {top ? <AddRectangleTeleportOption menuID={menuID} /> : <div>TODO</div>}
    </section>
  );
};

export default AddTeleportOption;
