import React, { useContext, useRef } from "react";
import { ModelContext } from "../store/ModelContext";
import TopAddOption from "./TopAddOption";

type OptionType = "HUD" | "Menu";

const AddOption: React.FC<{ menuID: string; top: boolean }> = ({
  menuID,
  top,
}) => {
  return (
    <section>
      <header>Add Option</header>
      {top ? <TopAddOption menuID={menuID} /> : null}
    </section>
  );
};

export default AddOption;
