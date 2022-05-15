import { FunctionComponent } from "react";
import Menu from "../../model/Menu";
import classes from "./MenuTag.module.css";

const MenuTag: FunctionComponent<{ value: Menu }> = ({ value }) => {
  const isTopLevel = !value.parentId;
  return (
    <section className={classes.menu}>
      <header className={isTopLevel ? classes.top_level : classes.head}>
        {isTopLevel ? <div>Top</div> : null}
        <div>Menu ID : {value.id}</div>
      </header>
    </section>
  );
};

export default MenuTag;
