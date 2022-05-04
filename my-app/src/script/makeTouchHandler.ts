import Action from "../model/Action";
import Menu from "../model/Menu";
import Rectangle from "../model/Rectangle";
import ScriptFunc from "./ScriptFunc";
import { makeVar } from "./ScriptVar";

const rectToParams = ({ left, bottom, right, top }: Rectangle): string => {
  return `${left},${bottom},${right},${top}`;
};

const createRectCheck = (rect: Rectangle, body: () => string) => {
  return `if( inside(x,y,${rectToParams(rect)})){${body()}}`;
};

const createActionCode = ({ destination, menu }: Action) => {
  if (destination) {
    return `doTeleport("${destination}");`;
  } else if (menu) {
    return `menuID="${menu.id}";doMenu();`;
  }
  return "*no possible action*/";
};

const makeTouchHandler = (menu: Menu): ScriptFunc => {
  const ret = new ScriptFunc(
    "touchHandler",
    [makeVar("float", "x"), makeVar("float", "y")],
    () => {
      return `${menu.options
        .map((option) => {
          if (option.rect) {
            const { rect, action } = option;
            return createRectCheck(rect, () => createActionCode(action));
          } else {
            return "";
          }
        })
        .join("\n")}
        llSetTimerEvent(60);
        `;
    }
  );
  return ret;
};

export default makeTouchHandler;
