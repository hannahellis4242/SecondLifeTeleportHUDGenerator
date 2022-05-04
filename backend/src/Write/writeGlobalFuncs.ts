import ScriptFunc, { writeFunc } from "./ScriptFunc";

const writeGlobalFuncs = (funcs: ScriptFunc[]): string => {
  return funcs.map(writeFunc).join("\n");
};

export default writeGlobalFuncs;
