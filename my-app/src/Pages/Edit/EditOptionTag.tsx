import { FunctionComponent } from "react";
import Option from "../../model/Option";
import MenuOptionEdit from "./MenuOptionEdit";
import RectOptionEdit from "./RectOptionEdit";

const EditOptionTag: FunctionComponent<{
  menuId: string;
  value: Option;
}> = ({ menuId, value }) => {
  if (value.rect) {
    return (
      <RectOptionEdit
        parent={menuId}
        optionID={value.id}
        rect={value.rect}
        action={value.action}
      />
    );
  } else if (value.label) {
    return <MenuOptionEdit menuId={menuId} option={value} />;
  } else {
    return <div>!!!InvalidOption!!!</div>;
  }
};

export default EditOptionTag;
