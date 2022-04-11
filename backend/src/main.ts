import readScriptFile from "./Read/readScriptFile";
import writeScript from "./Write/writeScript";
console.log(
  "This first version will expect a file called script.json and produce a file called script.lsl"
);

readScriptFile("script.json")
  .then((menu) => writeScript(menu))
  .catch((err) => console.log("ERROR : ", err.message));
