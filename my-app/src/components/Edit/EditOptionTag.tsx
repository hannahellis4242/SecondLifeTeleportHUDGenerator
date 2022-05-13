import React from "react";
import Option from "../../model/Option";
import MenuOption from "./MenuOption";
import RectOption from "./RectOption";

const OptionTag: React.FC<{ value: Option }> = ({ value }) => {
  if (value.rect) {
    return (
      <RectOption optionID={value.id} rect={value.rect} action={value.action} />
    );
  } else if (value.label) {
    return (
      <MenuOption
        optionID={value.id}
        label={value.label}
        action={value.action}
      />
    );
  } else {
    return <div>!!!InvalidOption!!!</div>;
  }
};

export default OptionTag;
