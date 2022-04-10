import Menu, { Rect } from "../model/scriptModel";
import ScriptFunc from "./ScriptFunc";
import { makeVar } from "./ScriptVar";

const rectToParams = ({ left, bottom, right, top }: Rect): string => {
  return `${left},${bottom},${right},${top}`;
};

const makeTouchHandler = (menu: Menu, debug: boolean): ScriptFunc => {
  const ret = new ScriptFunc(
    "touchHandler",
    [makeVar("float", "x"), makeVar("float", "y")],
    () => {
      return menu.options
        .map((option) => {
          if (option.rect) {
            const { rect, action } = option;
            if (action.label) {
              return `if( inside(x,y,${rectToParams(rect)}))
            { ${debug ? `llOwnerSay("${action.label}");` : ""}
              doTeleport("${action.label}");}`;
            } else if (action.menu) {
              return `menuID="${action.menu.id}";doMenu();`;
            }
          } else {
            return "";
          }
        })
        .join("\n");
    }
  );
  return ret;
};

export default makeTouchHandler;
