import React, { useContext, useRef } from "react";
import Rectangle from "../model/Rectangle";
import { ModelContext } from "../store/ModelContext";
import RectangleInput from "./RectangleInput";

const AddRectangleOption: React.FC<{ menuID: string }> = ({ menuID }) => {
  const modelContext = useContext(ModelContext);
  const rectangleRef = useRef<RectangleInput>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const onChange = () => {
    console.log("changed");
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const canSubmit = (): boolean => {
    const rectangle = rectangleRef.current;
    return rectangle ? rectangle.rectangle.isValid() : false;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <RectangleInput ref={rectangleRef} onChange={onChange} />
      <button type="submit" ref={submitRef} disabled={!canSubmit()}>
        Add
      </button>
    </form>
  );
};

export default AddRectangleOption;
