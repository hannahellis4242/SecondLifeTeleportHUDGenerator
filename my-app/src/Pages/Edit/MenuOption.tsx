import { FunctionComponent } from "react";
import Action from "../../model/Action";
import ActionEdit from "./ActionEdit";
import classes from "./MenuOption.module.css";
import RemoveOption from "./RemoveOption";

const MenuOption: FunctionComponent<{
  optionID: string;
  label: string;
  action: Action;
  fromMenu: boolean;
}> = ({ optionID, label, action, fromMenu }) => (
  <form className={classes.option}>
    <header className={classes.head}>
      Menu Option Label : {label}
      {fromMenu ? <RemoveOption optionId={optionID} /> : null}
    </header>
    <ActionEdit value={action} />
  </form>
);

export default MenuOption;
