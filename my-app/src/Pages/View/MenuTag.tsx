import React, { useContext } from "react";
import Menu from "../../model/Menu";
import OptionTag from "./OptionTag";
import classes from "./MenuTag.module.css";
import { ModelContext } from "../../store/ModelContext";
import { useNavigate } from "react-router-dom";
import { edit } from "../components/urlPath";

const MenuTag: React.FC<{ value: Menu }> = ({ value }) => {
  const isTopLevel = !value.parentId;
  const { setEditId } = useContext(ModelContext);
  const navigate = useNavigate();
  const doEdit = () => {
    setEditId(value.id);
    navigate(edit);
  };

  return (
    <section className={classes.menu}>
      <header className={isTopLevel ? classes.top_level : classes.head}>
        {isTopLevel ? <div>Top</div> : null}
        <div>
          Menu ID : {value.id}
          <button className={classes.btn} onClick={doEdit}>
            Edit
          </button>
        </div>
      </header>
      {value.message ? <p>Message : {value.message} </p> : null}
      {value.options.map((option, index) => (
        <OptionTag key={index} value={option} />
      ))}
    </section>
  );
};

export default MenuTag;
