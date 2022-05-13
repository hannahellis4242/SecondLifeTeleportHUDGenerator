import React from "react";
import Menu from "../../model/Menu";
import OptionTag from "../OptionTag";
import classes from "./MenuTag.module.css";
import AddTeleportOption from "./AddTeleportOption";
import AddMenuOption from "./AddMenuOption";

const MenuTag: React.FC<{ value: Menu }> = ({ value }) => {
  const isTopLevel = !value.parentId;
  return (
    <section className={classes.menu}>
      <header className={isTopLevel ? classes.top_level : classes.head}>
        {isTopLevel ? <div>Top</div> : null}
        <div>Menu ID : {value.id}</div>
      </header>
      {value.message ? <p>Message : {value.message} </p> : null}
      {value.options.map((option, index) => (
        <OptionTag key={index} value={option} />
      ))}
      <section className={classes.controls}>
        <AddTeleportOption menuID={value.id} top={isTopLevel} />
        <AddMenuOption menuID={value.id} top={isTopLevel} />
      </section>
    </section>
  );
};

export default MenuTag;
