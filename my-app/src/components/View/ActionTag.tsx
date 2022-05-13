import React from "react";
import Action from "../../model/Action";
import MenuTag from "./MenuTag";
import Teleport from "./Teleport";

const ActionTag: React.FC<{ value: Action }> = ({ value }) => {
  if (value.destination) {
    return <Teleport destination={value.destination} />;
  } else if (value.menu) {
    return <MenuTag value={value.menu} />;
  } else {
    return <div>!!!Invalid Action!!!</div>;
  }
};

export default ActionTag;
