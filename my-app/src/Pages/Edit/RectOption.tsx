import { FunctionComponent, useContext } from "react";
import Action from "../../model/Action";
import Rectangle from "../../model/Rectangle";
import ActionTag from "./ActionTag";
import classes from "./RectangleOption.module.css";
import RemoveOption from "./RemoveOption";

const RectOption: FunctionComponent<{
  optionID: string;
  rect: Rectangle;
  action: Action;
}> = ({ optionID, rect, action }) => {
  return (
    <section className={classes.option}>
      <header className={classes.head}>
        Rectangle
        <RemoveOption optionId={optionID} />
      </header>

      <section className={classes.body}>
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
    </section>
  );
};

export default RectOption;
