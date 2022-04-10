import ScriptFunc from "./ScriptFunc";
import { makeVar } from "./ScriptVar";

const makeDoTeleportFunc = () =>
  new ScriptFunc(
    "doTeleport",
    [makeVar("string", "loc")],
    () => "location=loc; llRequestPermissions(user, PERMISSION_TELEPORT);"
  );

export default makeDoTeleportFunc;
