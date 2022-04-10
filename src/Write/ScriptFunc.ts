import ScriptVar, { varType, writeVar } from "./ScriptVar";

export default class ScriptFunc {
  constructor(
    public name: string,
    public args: ScriptVar[],
    public body: () => string,
    public returnType?: varType
  ) {}
}

export const writeFunc = ({
  name,
  returnType,
  args,
  body,
}: ScriptFunc): string => {
  return `${returnType ? `${returnType} ` : ""}${name}(${args
    .map(writeVar)
    .join(", ")})
  {
      ${body()}
  }`;
};
