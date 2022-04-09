import { readFile } from "fs";
console.log(
  "This first version will expect a file called script.json and produce a file called script.lsl"
);

readFile("script.json", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data.toString());
  }
});
