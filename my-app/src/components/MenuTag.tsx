import React from "react";
import Menu from "../model/Menu";
import OptionTag from "./OptionTag";
import classes from "./MenuTag.module.css";
import AddOption from "./AddOption";

const MenuTag: React.FC<{ value: Menu }> = ({ value }) => {
  const isTopLevel = !value.parentId;
  return (
    <section className={classes.menu}>
      <header className={isTopLevel ? classes.top_level : classes.head}>
        {isTopLevel ? null : <div>Top</div>}
        <div>Menu ID : {value.id}</div>
      </header>
      {value.message ? <p>Message : {value.message} </p> : null}
      <AddOption menuID={value.id} top={isTopLevel} />
      {value.options.map((option, index) => (
        <OptionTag value={option} />
      ))}
    </section>
  );
};

export default MenuTag;
