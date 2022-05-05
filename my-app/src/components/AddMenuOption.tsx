import React from "react";
import AddRectangleTeleportOption from "./AddRectangleTeleportOption";

const AddMenuOption: React.FC<{ menuID: string; top: boolean }> = ({
  menuID,
  top,
}) => {
  return (
    <section>
      <header>Add Menu Option</header>
      {top ? <div>TODO</div> : <div>TODO</div>}
    </section>
  );
};

export default AddMenuOption;
