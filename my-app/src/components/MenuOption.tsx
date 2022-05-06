import React from "react";
import Action from "../model/Action";
import ActionTag from "./ActionTag";
import classes from "./MenuOption.module.css";
import RemoveOption from "./RemoveOption";

const MenuOption: React.FC<{
  optionID: string;
  label: string;
  action: Action;
}> = ({ optionID, label, action }) => (
  <section className={classes.option}>
    <header className={classes.head}>Menu Option Label : {label}</header>
    <ActionTag value={action} />
    <RemoveOption optionId={optionID} />
  </section>
);

export default MenuOption;
