import ScriptFunc from "./ScriptFunc";
import { makeVar } from "./ScriptVar";

const makeBetweenFunc = () =>
  new ScriptFunc(
    "between",
    [makeVar("float", "x"), makeVar("float", "min"), makeVar("float", "max")],
    () => `return x<max && x>min;`,
    "integer"
  );

export default makeBetweenFunc;
