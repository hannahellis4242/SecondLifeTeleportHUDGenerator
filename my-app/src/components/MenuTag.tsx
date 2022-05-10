import React, { useContext } from "react";
import Menu from "../model/Menu";
import OptionTag from "./OptionTag";
import classes from "./MenuTag.module.css";
import { useNavigate } from "react-router-dom";
import { ModelContext } from "../store/ModelContext";

const MenuTag: React.FC<{ value: Menu }> = ({ value }) => {
  const { setEditId } = useContext(ModelContext);
  const isTopLevel = !value.parentId;
  const navigate = useNavigate();
  const onClickEdit = () => {
    setEditId(value.id);
    navigate("/Edit");
  };
  return (
    <section className={classes.menu}>
      <header className={isTopLevel ? classes.top_level : classes.head}>
        {isTopLevel ? <div>Top</div> : null}
        <div>Menu ID : {value.id}</div>
        <button onClick={onClickEdit}>Edit</button>
      </header>
      {value.message ? <p>Message : {value.message} </p> : null}
      {value.options.map((option, index) => (
        <OptionTag key={index} value={option} />
      ))}
    </section>
  );
};

export default MenuTag;
