import React from "react";
import Menu from "../model/Menu";
import classes from "./EditMenuTag.module.css";
import EditOption from "./EditOption";

const EditMenuTag: React.FC<{ value: Menu }> = ({ value }) => {
  const isTopLevel = !value.parentId;
  return (
    <section className={classes.menu}>
      <header className={isTopLevel ? classes.top_level : classes.head}>
        {isTopLevel ? <div>Top</div> : null}
        <div>Menu ID : {value.id}</div>
        <button>Add</button>
      </header>
      {value.message ? <p>Message : {value.message} </p> : null}
      {value.options.map((option, index) => (
        <EditOption key={index} value={option} />
      ))}
    </section>
  );
};

export default EditMenuTag;
