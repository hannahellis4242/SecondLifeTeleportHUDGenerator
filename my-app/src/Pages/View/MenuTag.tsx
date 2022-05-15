import { FunctionComponent, useContext, useState } from "react";
import Menu from "../../model/Menu";
import OptionTag from "./OptionTag";
import classes from "./MenuTag.module.css";
import { ModelContext } from "../../store/ModelContext";
import { useNavigate } from "react-router-dom";
import { edit } from "../components/urlPath";

const MenuTag: FunctionComponent<{ value: Menu }> = ({ value }) => {
  const isTopLevel = !value.parentId;
  const [collapsed, setCollased] = useState<boolean>(value.collapsed);
  const { setEditId, toggleCollapse } = useContext(ModelContext);
  const navigate = useNavigate();
  const changeCollapse = () => {
    setCollased((current) => !current);
    toggleCollapse(value.id);
  };
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
          </button>{" "}
          {value.options.length !== 0 ? (
            <button className={classes.btn} onClick={changeCollapse}>
              {collapsed ? "Show" : "Hide"}
            </button>
          ) : null}
        </div>
      </header>
      {!value.collapsed ? (
        <section>
          {value.message ? <p>Message : {value.message} </p> : null}
          {value.options.map((option, index) => (
            <OptionTag key={index} value={option} />
          ))}
        </section>
      ) : null}
    </section>
  );
};

export default MenuTag;
