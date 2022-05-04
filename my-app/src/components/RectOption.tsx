import React from "react";
import Action from "../model/Action";
import Rectangle from "../model/Rectangle";
import ActionTag from "./ActionTag";

const RectOption: React.FC<{ rect: Rectangle; action: Action }> = ({
  rect,
  action,
}) => {
  return (
    <section>
      <section>
        <header>Rectangle</header>
        <table>
          <th>
            <td>Left</td>
            <td>Bottom</td>
            <td>Right</td>
            <td>Top</td>
          </th>
          <tr>
            <td>{rect.left}</td>
            <td>{rect.bottom}</td>
            <td>{rect.right}</td>
            <td>{rect.top}</td>
          </tr>
        </table>
      </section>
      <ActionTag value={action} />
    </section>
  );
};

export default RectOption;
