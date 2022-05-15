import { FunctionComponent } from "react";
import Action from "../../model/Action";
import Rectangle from "../../model/Rectangle";
import ActionEdit from "./ActionEdit";
import RectangleInput from "./RectangleInput";
import classes from "./RectangleOption.module.css";

const RectOptionEdit: FunctionComponent<{
  optionID: string;
  rect: Rectangle;
  action: Action;
}> = ({ optionID, rect, action }) => {
  return (
    <section className={classes.option}>
      <header className={classes.head}>Rectangle</header>
      <RectangleInput rect={rect} />
      <ActionEdit value={action} />
    </section>
  );
};

export default RectOptionEdit;
