import { FunctionComponent } from "react";
import Action from "../../model/Action";
import Teleport from "./Teleport";

const ActionEdit: FunctionComponent<{ value: Action }> = ({ value }) => {
  if (value.destination) {
    return <Teleport destination={value.destination} />;
  } else if (value.menu) {
    return <div>Cannot Edit A menu within another menu</div>;
  } else {
    return <div>!!!Invalid Action!!!</div>;
  }
};

export default ActionEdit;
