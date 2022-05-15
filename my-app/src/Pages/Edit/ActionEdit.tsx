import React, { forwardRef } from "react";
import Action from "../../model/Action";
import MenuTag from "./MenuTag";
import TeleportEdit from "./TeleportEdit";

const ActionEdit = forwardRef<
  HTMLInputElement,
  {
    value: Action;
    onChange: () => void;
  }
>(({ value, onChange }, ref) => {
  if (value.destination) {
    return (
      <TeleportEdit
        ref={ref}
        destination={value.destination}
        onChange={onChange}
      />
    );
  } else if (value.menu) {
    return <MenuTag value={value.menu} />;
  } else {
    return <div>!!!Invalid Action!!!</div>;
  }
});

export default ActionEdit;
