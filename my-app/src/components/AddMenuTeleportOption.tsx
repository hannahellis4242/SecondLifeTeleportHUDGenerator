import React, { useContext, useRef } from "react";
import { v4 } from "uuid";
import { ModelContext } from "../store/ModelContext";
import Option from "../model/Option";

const AddMenuTeleportOption: React.FC<{ menuID: string }> = ({ menuID }) => {
  const modelContext = useContext(ModelContext);
  const labelRef = useRef<HTMLInputElement>(null);
  const teleportRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const lableInput = labelRef.current;
    const teleportInput = teleportRef.current;
    if (lableInput && teleportInput) {
      const option: Option = {
        id: v4().toString(),
        label: lableInput.value,
        action: { destination: teleportInput.value },
      };
      modelContext.addOption(menuID, option);
    }
  };
  const canSubmit = (): boolean => {
    const lableInput = labelRef.current;
    const teleportInput = teleportRef.current;
    return lableInput && teleportInput
      ? lableInput.value !== "" && teleportInput.value !== ""
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
      <label htmlFor="label">Option Label : </label>
      <input ref={labelRef} type="text" id="label" onChange={onChange} />
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

export default AddMenuTeleportOption;
