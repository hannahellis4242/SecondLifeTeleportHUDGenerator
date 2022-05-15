import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Action from "../../model/Action";
import { ModelContext } from "../../store/ModelContext";
import { edit } from "../components/urlPath";
import ActionTag from "./ActionTag";
import classes from "./MenuOption.module.css";

const MenuOption: React.FC<{
  optionID: string;
  label: string;
  action: Action;
}> = ({ optionID, label, action }) => {
  const { setEditId } = useContext(ModelContext);
  const navigate = useNavigate();
  const doEdit = () => {
    setEditId(optionID);
    navigate(edit);
  };
  return (
    <section className={classes.option}>
      <header className={classes.head}>
        Menu Option Label : {label}
        <button className={classes.btn} onClick={doEdit}>
          Edit
        </button>
      </header>
      <ActionTag value={action} />
    </section>
  );
};

export default MenuOption;
