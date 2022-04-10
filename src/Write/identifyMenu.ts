import Menu from "../model/scriptModel";
import { v4 } from "uuid";

interface IdentifiedMenu {
  id: number;
  menu: Menu;
}

type IdentifiedMenuList = IdentifiedMenu[];

const identifyMenu = (menu: Menu): IdentifiedMenuList => {
  return [];
};
