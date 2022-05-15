import { FunctionComponent, useRef } from "react";
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
  const teleportRef = useRef<HTMLInputElement>(null);
  const onChange = () => {};
  return (
    <section className={classes.option}>
      <header className={classes.head}>Rectangle</header>
      <RectangleInput rect={rect} />
      <ActionEdit ref={teleportRef} value={action} onChange={onChange} />
    </section>
  );
};

export default RectOptionEdit;
