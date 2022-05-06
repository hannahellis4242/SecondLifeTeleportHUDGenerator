import React, { useContext, useRef } from "react";
import { v4 } from "uuid";
import { ModelContext } from "../store/ModelContext";
import Option from "../model/Option";
import Menu from "../model/Menu";

const AddMenuMenuOption: React.FC<{ menuID: string }> = ({ menuID }) => {
  const modelContext = useContext(ModelContext);
  const labelRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const lableInput = labelRef.current;
    const messageInput = messageRef.current;
    if (lableInput && messageInput) {
      const option: Option = {
        id: v4().toString(),
        label: lableInput.value,
        action: {
          menu: new Menu(v4().toString(), [], menuID, messageInput.value),
        },
      };
      modelContext.addOption(menuID, option);
    }
  };
  const canSubmit = (): boolean => {
    const lableInput = labelRef.current;
    const messageInput = messageRef.current;
    return lableInput && messageInput
      ? lableInput.value !== "" && messageInput.value !== ""
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
      <label htmlFor="message">Menu message : </label>
      <input ref={messageRef} type="text" id="message" onChange={onChange} />
      <button type="submit" ref={submitRef} disabled={!canSubmit()}>
        Add
      </button>
    </form>
  );
};

export default AddMenuMenuOption;
