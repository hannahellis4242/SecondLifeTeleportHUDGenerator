import React from "react";
import Action from "../../model/Action";
import ActionEdit from "./ActionEdit";
import classes from "./MenuOption.module.css";
import RemoveOption from "./RemoveOption";

const MenuOption: React.FC<{
  optionID: string;
  label: string;
  action: Action;
  fromMenu: boolean;
}> = ({ optionID, label, action, fromMenu }) => (
  <section className={classes.option}>
    <header className={classes.head}>Menu Option Label : {label}</header>
    <ActionEdit value={action} />
    {fromMenu ? <RemoveOption optionId={optionID} /> : null}
  </section>
);

export default MenuOption;
