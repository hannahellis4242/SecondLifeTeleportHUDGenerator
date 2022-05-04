export type varType = "key" | "integer" | "string" | "float";

export default class ScriptVar {
  constructor(public type: varType, public name: string) {}
}

export const makeVar = (type: varType, name: string): ScriptVar => {
  return new ScriptVar(type, name);
};

export const writeVar = (v: ScriptVar): string => {
  return v.type + " " + v.name;
};
