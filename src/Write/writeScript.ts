import Menu, { Rect } from "../model/scriptModel";
import makeBetweenFunc from "./makeBetweenFunc";
import makeDoTeleportFunc from "./makeDoTeleportFunc";
import makeInsideFunc from "./makeInsideFunc";
import makeTouchHandler from "./makeTouchHandler";
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
      makeBetweenFunc(),
      makeInsideFunc(),
      makeDoTeleportFunc(),
      makeTouchHandler(menu, true),
    ]) +
    writeDefaultState(stateEntry, touch, runtimePermissions)
  );
};

export default writeScript;
