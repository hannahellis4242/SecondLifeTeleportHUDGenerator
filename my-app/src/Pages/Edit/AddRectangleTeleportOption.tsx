import { FunctionComponent, useContext, useRef } from "react";
import { ModelContext } from "../../store/ModelContext";
import RectangleInput from "./RectangleInput";
import Option from "../../model/Option";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { view } from "../components/urlPath";
import { valid } from "../../model/Rectangle";

const AddRectangleTeleportOption: FunctionComponent<{ menuID: string }> = ({
  menuID,
}) => {
  const modelContext = useContext(ModelContext);
  const rectangleRef = useRef<RectangleInput>(null);
  const teleportRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const rectInput = rectangleRef.current;
    const teleInput = teleportRef.current;
    if (rectInput && teleInput) {
      const option: Option = {
        id: v4().toString(),
        action: { destination: teleInput.value },
        rect: rectInput.rectangle,
      };
      modelContext.addOption(menuID, option);
      navigate(view);
    }
  };
  const canSubmit = (): boolean => {
    const rectInput = rectangleRef.current;
    const teleportInput = teleportRef.current;
    return rectInput && teleportInput
      ? valid(rectInput.rectangle) && teleportInput.value !== ""
      : false;
  };

  const onChange = () => {
    const submit = submitRef.current;
    if (submit) {
      submit.disabled = !canSubmit();
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <RectangleInput ref={rectangleRef} onChange={onChange} />
      <label htmlFor="destination">Teleport landmark name : </label>
      <input
        type="text"
        ref={teleportRef}
        onChange={onChange}
        id="destination"
      />
      <button type="submit" ref={submitRef} disabled={!canSubmit()}>
        Add
      </button>
    </form>
  );
};

export default AddRectangleTeleportOption;
