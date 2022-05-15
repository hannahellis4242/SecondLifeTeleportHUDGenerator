import { FunctionComponent } from "react";
import Action from "../../model/Action";
import ActionTag from "./ActionTag";
import classes from "./MenuOption.module.css";
import RemoveOption from "./RemoveOption";

const MenuOptionEdit: FunctionComponent<{
  optionID: string;
  label: string;
  action: Action;
  fromMenu: boolean;
}> = ({ optionID, label, action, fromMenu }) => (
  <section className={classes.option}>
    <header className={classes.head}>
      Menu Option Label : {label}
      {fromMenu ? <RemoveOption optionId={optionID} /> : null}
    </header>
    <ActionTag value={action} />
  </section>
);

export default MenuOptionEdit;
