import Menu, { Option, Action } from "../model/scriptModel";
import ScriptFunc from "./ScriptFunc";
import { makeVar } from "./ScriptVar";
import flattenMenu from "./utils/flattenMenu";

const makeActionBody = ({ destination, menu }: Action) => {
  if (destination) {
    return `doTeleport("${destination}");`;
  }

  if (menu) {
    return `menuID="${menu.id}"; doMenu();`;
  }
  return "";
};

const makeOptionBody = ({ label, action }: Option) => {
  if (label) {
    return `if(message=="${label}"){
    ${makeActionBody(action)}
}`;
  }
  return "";
};

const makeMenuHandlerFunc = (menu: Menu) => {
  const [_, ...decendants] = flattenMenu(menu);
  return new ScriptFunc("handleMenu", [makeVar("string", "message")], () =>
    decendants
      .map(
        ({ id, options }) => `if( menuID == "${id}" ){
        ${options.map(makeOptionBody).join("\n")}
    }`
      )
      .join("\n")
  );
};

export default makeMenuHandlerFunc;
