import { FunctionComponent, useContext } from "react";
import { ModelContext } from "../../store/ModelContext";
import classes from "./RemoveOption.module.css";

const RemoveOption: FunctionComponent<{ optionId: string }> = ({
  optionId,
}) => {
  const modelContext = useContext(ModelContext);
  const onClick = () => {
    modelContext.removeOption(optionId);
  };
  return (
    <button className={classes.btn} onClick={onClick}>
      Remove
    </button>
  );
};

export default RemoveOption;
