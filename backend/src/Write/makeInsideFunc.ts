import ScriptFunc from "./ScriptFunc";
import { makeVar } from "./ScriptVar";

const makeInsideFunc = () =>
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
    () => `return between(x,left,right) && between(y,bottom,top);`,
    "integer"
  );

export default makeInsideFunc;
