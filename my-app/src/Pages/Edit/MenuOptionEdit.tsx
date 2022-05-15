import { FormEvent, FunctionComponent, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Option from "../../model/Option";
import { ModelContext } from "../../store/ModelContext";
import { view } from "../components/urlPath";
import ActionEdit from "./ActionEdit";
import classes from "./MenuOption.module.css";

const MenuOptionEdit: FunctionComponent<{ menuId: string; option: Option }> = ({
  menuId,
  option,
}) => {
  const modelContext = useContext(ModelContext);
  const labelInputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const canSubmit = () => {
    const labelInput = labelInputRef.current;
    const button = buttonRef.current;
    if (labelInput && button) {
      button.disabled = labelInput.value === option.label;
    }
  };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const labelInput = labelInputRef.current;
    if (labelInput) {
      modelContext.updateOption(menuId, option.id, {
        id: option.id,
        label: labelInput.value,
        action: option.action,
      });
      navigate(view);
    }
  };

  return (
    <form className={classes.option} onSubmit={submit}>
      <header className={classes.head}>
        <label>Menu Option Label :</label>
        <input
          ref={labelInputRef}
          type="text"
          defaultValue={option.label}
          onChange={canSubmit}
        />
        <button
          ref={buttonRef}
          className={classes.btn}
          type="submit"
          disabled={true}
        >
          update
        </button>
      </header>
      <ActionEdit value={option.action} />
    </form>
  );
};

export default MenuOptionEdit;
