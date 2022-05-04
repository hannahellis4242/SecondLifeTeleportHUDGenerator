import React from "react";
import Action from "../model/Action";
import ActionTag from "./ActionTag";

const MenuOption: React.FC<{ label: string; action: Action }> = ({
  label,
  action,
}) => (
  <section>
    <header>{label}</header>
    <ActionTag value={action} />
  </section>
);

export default MenuOption;
