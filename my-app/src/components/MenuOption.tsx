import React from "react";
import Action from "../model/Action";
import ActionTag from "./ActionTag";
import classes from "./MenuOption.module.css";

const MenuOption: React.FC<{ label: string; action: Action }> = ({
  label,
  action,
}) => (
  <section className={classes.option}>
    <header className={classes.head}>Menu Option Label : {label}</header>
    <ActionTag value={action} />
  </section>
);

export default MenuOption;
