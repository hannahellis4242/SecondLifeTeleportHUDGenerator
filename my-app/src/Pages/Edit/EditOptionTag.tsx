import { FunctionComponent } from "react";
import Option from "../../model/Option";
import MenuOptionEdit from "./MenuOptionEdit";
import RectOptionEdit from "./RectOptionEdit";

const EditOptionTag: FunctionComponent<{
  value: Option;
}> = ({ value }) => {
  if (value.rect) {
    return (
      <RectOptionEdit
        optionID={value.id}
        rect={value.rect}
        action={value.action}
      />
    );
  } else if (value.label) {
    return <MenuOptionEdit option={value} />;
  } else {
    return <div>!!!InvalidOption!!!</div>;
  }
};

export default EditOptionTag;
