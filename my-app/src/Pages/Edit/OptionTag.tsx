import { FunctionComponent } from "react";
import Option from "../../model/Option";
import MenuOption from "./MenuOption";
import RectOption from "./RectOption";

const OptionTag: FunctionComponent<{ value: Option; fromMenu: boolean }> = ({
  value,
  fromMenu,
}) => {
  if (value.rect) {
    return (
      <RectOption
        optionID={value.id}
        rect={value.rect}
        action={value.action}
        fromMenu={fromMenu}
      />
    );
  } else if (value.label) {
    return (
      <MenuOption
        optionID={value.id}
        label={value.label}
        action={value.action}
        fromMenu={fromMenu}
      />
    );
  } else {
    return <div>!!!InvalidOption!!!</div>;
  }
};

export default OptionTag;
