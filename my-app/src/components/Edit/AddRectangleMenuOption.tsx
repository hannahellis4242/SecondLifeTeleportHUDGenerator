import React, { useContext, useRef } from "react";
import { ModelContext } from "../../store/ModelContext";
import RectangleInput from "../RectangleInput";
import Option from "../../model/Option";
import { v4 } from "uuid";
import Menu from "../../model/Menu";

const AddRectangleMenuOption: React.FC<{ menuID: string }> = ({ menuID }) => {
  const modelContext = useContext(ModelContext);
  const rectangleRef = useRef<RectangleInput>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const rectInput = rectangleRef.current;
    const messageInput = messageRef.current;
    if (rectInput && messageInput) {
      const option: Option = {
        id: v4().toString(),
        action: {
          menu: new Menu(v4().toString(), [], menuID, messageInput.value),
        },
        rect: rectInput.rectangle,
      };
      modelContext.addOption(menuID, option);
    }
  };
  const canSubmit = (): boolean => {
    const rectInput = rectangleRef.current;
    const messageInput = messageRef.current;
    return rectInput && messageInput
      ? rectInput.rectangle.isValid() && messageInput.value !== ""
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
      <label htmlFor="message">Menu message : </label>
      <input ref={messageRef} type="text" id="message" onChange={onChange} />
      <button type="submit" ref={submitRef}>
        Add
      </button>
    </form>
  );
};

export default AddRectangleMenuOption;
