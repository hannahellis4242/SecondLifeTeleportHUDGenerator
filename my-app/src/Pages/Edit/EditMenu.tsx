import React, { ChangeEvent, useState } from "react";
import Menu from "../../model/Menu";
import OptionTag from "./OptionTag";
import classes from "./EditMenu.module.css";
import AddTeleportOption from "./AddTeleportOption";
import AddMenuOption from "./AddMenuOption";

type AddType = "Teleport" | "Menu";

const toAddType = (s: string): AddType | null => {
  switch (s) {
    case "Teleport":
      return "Teleport";
    case "Menu":
      return "Menu";
    default:
      return null;
  }
};

const EditMenu: React.FC<{ value: Menu }> = ({ value }) => {
  const isTopLevel = !value.parentId;
  const [addType, changeAddType] = useState<AddType>("Teleport");
  const handleTypeChange = ({ target }: ChangeEvent) => {
    if (target instanceof HTMLInputElement) {
      const addType = toAddType(target.value);
      if (addType) {
        changeAddType(() => addType);
      }
    }
  };
  return (
    <section className={classes.menu}>
      <header className={isTopLevel ? classes.top_level : classes.head}>
        {isTopLevel ? <div>Top</div> : null}
        <div>Menu ID : {value.id}</div>
      </header>
      <section className={classes.controls}>
        <input
          type="radio"
          id="Teleport"
          name="addType"
          value="Teleport"
          defaultChecked={addType === "Teleport"}
          onChange={handleTypeChange}
        />
        <label htmlFor="Teleport">Teleport</label>
        <input
          type="radio"
          id="Menu"
          name="addType"
          value="Menu"
          defaultChecked={addType === "Menu"}
          onChange={handleTypeChange}
        />
        <label htmlFor="Menu">Menu</label>
        {addType === "Teleport" ? (
          <AddTeleportOption menuID={value.id} top={isTopLevel} />
        ) : (
          <AddMenuOption menuID={value.id} top={isTopLevel} />
        )}
      </section>
      {value.message ? <p>Message : {value.message} </p> : null}
      {value.options.map((option, index) => (
        <OptionTag key={index} value={option} fromMenu={true} />
      ))}
    </section>
  );
};

export default EditMenu;
