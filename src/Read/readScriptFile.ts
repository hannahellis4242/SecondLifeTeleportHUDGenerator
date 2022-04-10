import { readFile } from "fs";
import { promisify } from "util";
import Menu from "../model/scriptModel";
import identifyMenu from "./identifyMenu";

const readScriptFile = async (file: string): Promise<Menu> => {
  return promisify(readFile)(file)
    .then((buffer) => buffer.toString())
    .then((str) => JSON.parse(str))
    .then((menu) => {
      identifyMenu(menu);
      return menu;
    });
};

export default readScriptFile;
