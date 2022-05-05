import React, { useContext, useRef } from "react";
import { ModelContext } from "../store/ModelContext";
import TeleportActionInput from "./TeleportActionInput";
import RectangleInput from "./RectangleInput";
import Option from "../model/Option";
import { v4 } from "uuid";

const AddRectangleTeleportOption: React.FC<{ menuID: string }> = ({
  menuID,
}) => {
  const modelContext = useContext(ModelContext);
  const rectangleRef = useRef<RectangleInput>(null);
  const teleportRef = useRef<TeleportActionInput>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const rectInput = rectangleRef.current;
    const teleInput = teleportRef.current;
    if (rectInput && teleInput) {
      const option: Option = {
        id: v4().toString(),
        action: { destination: teleInput.destination },
        rect: rectInput.rectangle,
      };
      modelContext.addOption(menuID, option);
    }
  };
  const canSubmit = (): boolean => {
    const rectInput = rectangleRef.current;
    const teleportInput = teleportRef.current;
    return rectInput && teleportInput
      ? rectInput.rectangle.isValid() && teleportInput.destination !== ""
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
      <TeleportActionInput ref={teleportRef} onChange={onChange} />
      <button type="submit" ref={submitRef} disabled={!canSubmit()}>
        Add
      </button>
    </form>
  );
};

export default AddRectangleTeleportOption;
