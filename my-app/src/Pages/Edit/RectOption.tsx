import React from "react";
import Action from "../../model/Action";
import Rectangle from "../../model/Rectangle";
import ActionEdit from "./ActionEdit";
import RectangleInput from "./RectangleInput";
import classes from "./RectangleOption.module.css";
import RemoveOption from "./RemoveOption";

const RectOption: React.FC<{
  optionID: string;
  rect: Rectangle;
  action: Action;
  fromMenu: boolean;
}> = ({ optionID, rect, action, fromMenu }) => {
  return (
    <section className={classes.option}>
      <header className={classes.head}>
        Rectangle
        {fromMenu ? <RemoveOption optionId={optionID} /> : null}
      </header>
      <RectangleInput rect={rect} />
      <ActionEdit value={action} />
    </section>
  );
};

export default RectOption;
