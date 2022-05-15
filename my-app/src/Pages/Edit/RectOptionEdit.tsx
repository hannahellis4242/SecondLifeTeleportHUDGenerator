import { useContext } from "react";
import { FormEvent, FunctionComponent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Action from "../../model/Action";
import Rectangle, { different, valid } from "../../model/Rectangle";
import { ModelContext } from "../../store/ModelContext";
import { view } from "../components/urlPath";
import ActionEdit from "./ActionEdit";
import RectangleInput from "./RectangleInput";
import classes from "./RectangleOption.module.css";

const RectOptionEdit: FunctionComponent<{
  optionID: string;
  rect: Rectangle;
  action: Action;
}> = ({ optionID, rect, action }) => {
  const { updateOption } = useContext(ModelContext);
  const rectRef = useRef<RectangleInput>(null);
  const teleportRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const canSubmit = () => {
    const rectInput = rectRef.current;
    const button = buttonRef.current;
    if (rectInput && button) {
      if (!valid(rectInput.rectangle)) {
        button.disabled = true;
      } else {
        const rectChanged = different(rect, rectInput.rectangle);
        if (action.destination) {
          const teleport = teleportRef.current;
          if (teleport) {
            const teleportChanged = teleport.value !== action.destination;
            button.disabled = !(rectChanged || teleportChanged);
          }
        } else {
          button.disabled = !rectChanged;
        }
      }
    }
  };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const rectInput = rectRef.current;
    if (rectInput) {
      const teleport = teleportRef.current;
      if (teleport) {
        updateOption(optionID, {
          id: optionID,
          rect: rectInput.rectangle,
          action: { destination: teleport.value },
        });
      } else {
        updateOption(optionID, {
          id: optionID,
          rect: rectInput.rectangle,
          action,
        });
      }
      navigate(view);
    }
  };
  return (
    <form className={classes.option} onSubmit={submit}>
      <header className={classes.head}>
        Rectangle{" "}
        <button ref={buttonRef} type="submit" className={classes.btn} disabled>
          update
        </button>
      </header>
      <RectangleInput ref={rectRef} rect={rect} onChange={canSubmit} />
      <ActionEdit ref={teleportRef} value={action} onChange={canSubmit} />
    </form>
  );
};

export default RectOptionEdit;
