import React, { useContext } from "react";
import { ModelContext } from "../store/ModelContext";

const RemoveOption: React.FC<{ optionId: string }> = ({ optionId }) => {
  const modelContext = useContext(ModelContext);
  const onClick = () => {
    modelContext.removeOption(optionId);
  };
  return <button onClick={onClick}>Remove</button>;
};

export default RemoveOption;
