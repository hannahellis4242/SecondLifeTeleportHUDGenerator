import Menu, { Rect } from "../model/scriptModel";
import ScriptFunc from "./ScriptFunc";
import { makeVar } from "./ScriptVar";
import writeDefaultState from "./writeDefaultState";
import writeGlobalFuncs from "./writeGlobalFuncs";
import writeGlobalVars from "./writeGlobalVars";

const stateEntry = () => {
  return 'state_entry()\n{\nchannel = -1 - (integer)("0x" + llGetSubString( (string)llGetKey(), -7, -1) );\n}\n';
};

const touch = () => {
  return (
    "touch_start( integer total_number )\n{\n" +
    "user = llDetectedKey(0);\n" +
    "integer touchFace = llDetectedTouchFace(0);\n" +
    "vector  touchUV   = llDetectedTouchUV(0);\n" +
    'if (touchFace == -1){llOwnerSay("Sorry, your viewer doesn\'t support touched faces.");}\n' +
    'else if (touchUV == TOUCH_INVALID_TEXCOORD){llOwnerSay("Sorry, the touch position upon the face could not be determined.");}\n' +
    "else{touchHandler(touchUV.x,touchUV.y);}\n" +
    "\n}"
  );
};

const runtimePermissions = () => {
  return `run_time_permissions(integer perm)
  {
      if(PERMISSION_TELEPORT & perm)
      {
          llListenRemove(listener);
          llTeleportAgent(user,location,<0,0,0>,<0,0,0>);
      }
  }`;
};

const rectToParams = ({ left, bottom, right, top }: Rect): string => {
  return `${left},${bottom},${right},${top}`;
};

const createTouchHandler = (menu: Menu, debug: boolean): ScriptFunc => {
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
          { ${debug ? `llOwnerSay(${action.label});` : ""}
            doTeleport("${action.label}");}`;
            } else {
              return "/*menu action*/";
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

const writeScript = (menu: Menu): string => {
  return (
    writeGlobalVars([
      makeVar("key", "user"),
      makeVar("string", "location"),
      makeVar("integer", "listener"),
      makeVar("integer", "channel"),
      makeVar("integer", "menuID"),
    ]) +
    writeGlobalFuncs([
      new ScriptFunc(
        "between",
        [
          makeVar("float", "x"),
          makeVar("float", "min"),
          makeVar("float", "max"),
        ],
        () => "return x<min && x>max;",
        "integer"
      ),
      new ScriptFunc(
        "inside",
        [
          makeVar("float", "x"),
          makeVar("float", "y"),
          makeVar("float", "left"),
          makeVar("float", "bottom"),
          makeVar("float", "right"),
          makeVar("float", "top"),
        ],
        () => "return between(x,left,right) && between(y,bottom,top);",
        "integer"
      ),
      new ScriptFunc(
        "doTeleport",
        [makeVar("string", "loc")],
        () => "location=loc; llRequestPermissions(user, PERMISSION_TELEPORT);"
      ),
      createTouchHandler(menu, true),
    ]) +
    writeDefaultState(stateEntry, touch, runtimePermissions)
  );
};

export default writeScript;
