import React from "react";
import Menu from "../model/Menu";
import OptionTag from "./OptionTag";

const MenuTag: React.FC<{ value: Menu }> = ({ value }) => {
  return (
    <div>
      {value.options.map((option, index) => (
        <OptionTag value={option} />
      ))}
    </div>
  );
};

export default MenuTag;
