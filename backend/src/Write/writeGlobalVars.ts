import ScriptVar, { writeVar } from "./ScriptVar";

const writeGlobalVars = (vars: ScriptVar[]): string => {
  return vars
    .map(writeVar)
    .map((x) => x + ";")
    .join("\n");
};

export default writeGlobalVars;
