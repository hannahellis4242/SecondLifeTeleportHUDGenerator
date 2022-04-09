import Menu from "../model/scriptModel";

type varType = "key" | "integer" | "string";

class ScriptVar {
  constructor(public type: varType, public name: string) {}
}

class ScriptFunc {
  constructor(
    public name: string,
    public args: ScriptVar[],
    public body: () => string,
    public returnType?: varType
  ) {}
}

const writeVar = (v: ScriptVar): string => {
  return v.type + " " + v.name;
};

const writeFunc = (f: ScriptFunc): string => {
  return (
    (f.returnType ? f.returnType + " " : "") +
    f.name +
    "(" +
    f.args.map(writeVar).join(", ") +
    "){" +
    f.body() +
    "}"
  );
};

const writeGlobalVars = (vars: ScriptVar[]): string => {
  return vars
    .map(writeVar)
    .map((x) => x + ";")
    .join("\n");
};

const writeGlobalFuncs = (funcs: ScriptFunc[]): string => {
  return funcs.map(writeFunc).join("\n");
};

const writeDefaultState = (
  writeStateEntry: () => string,
  writeTouch: () => string
): string => {
  return "default{" + writeStateEntry() + writeTouch() + "}";
};

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

const writeScript = (menu: Menu): string => {
  return (
    writeGlobalVars([
      new ScriptVar("key", "user"),
      new ScriptVar("string", "location"),
      new ScriptVar("integer", "listener"),
      new ScriptVar("integer", "channel"),
      new ScriptVar("integer", "menuID"),
    ]) +
    writeGlobalFuncs([
      new ScriptFunc(
        "between",
        [
          new ScriptVar("integer", "x"),
          new ScriptVar("integer", "min"),
          new ScriptVar("integer", "max"),
        ],
        () => "return x<min && x>max;",
        "integer"
      ),
      new ScriptFunc(
        "inside",
        [
          new ScriptVar("integer", "x"),
          new ScriptVar("integer", "y"),
          new ScriptVar("integer", "left"),
          new ScriptVar("integer", "bottom"),
          new ScriptVar("integer", "right"),
          new ScriptVar("integer", "top"),
        ],
        () => "return between(x,left,right) && between(y,bottom,top);",
        "integer"
      ),
    ]) +
    writeDefaultState(stateEntry, touch)
  );
};

export default writeScript;
