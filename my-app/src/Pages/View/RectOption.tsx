import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Action from "../../model/Action";
import Rectangle from "../../model/Rectangle";
import { ModelContext } from "../../store/ModelContext";
import { edit } from "../components/urlPath";
import ActionTag from "./ActionTag";
import classes from "./RectangleOption.module.css";

const RectOption: React.FC<{
  optionID: string;
  rect: Rectangle;
  action: Action;
}> = ({ optionID, rect, action }) => {
  const { setEditId } = useContext(ModelContext);
  const navigate = useNavigate();
  const doEdit = () => {
    setEditId(optionID);
    navigate(edit);
  };
  return (
    <section className={classes.option}>
      <header className={classes.head}>
        Rectangle
        <button className={classes.btn} onClick={doEdit}>
          Edit
        </button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Left</th>
            <th>Bottom</th>
            <th>Right</th>
            <th>Top</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{rect.left}</td>
            <td>{rect.bottom}</td>
            <td>{rect.right}</td>
            <td>{rect.top}</td>
          </tr>
        </tbody>
      </table>
      <ActionTag value={action} />
    </section>
  );
};

export default RectOption;
