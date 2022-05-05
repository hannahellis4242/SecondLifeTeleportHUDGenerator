import React, { useContext, useRef } from "react";
import { ModelContext } from "../store/ModelContext";
import TeleportActionInput from "./TeleportActionInput";
import RectangleInput from "./RectangleInput";

const AddRectangleTeleportOption: React.FC<{ menuID: string }> = ({
  menuID,
}) => {
  const modelContext = useContext(ModelContext);
  const rectangleRef = useRef<RectangleInput>(null);
  const teleportRef = useRef<TeleportActionInput>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
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
