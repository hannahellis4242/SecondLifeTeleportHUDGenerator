import Menu, { Option } from "../model/scriptModel";
import ScriptFunc from "./ScriptFunc";

const getMenu = ({ action }: Option) => action.menu;
const isMenu = (item?: Menu): item is Menu => {
  return !!item;
};

const flattenMenu = (menu: Menu): Menu[] => {
  const childMenus = menu.options
    .map(getMenu)
    .filter(isMenu)
    .flatMap(flattenMenu);
  return [menu].concat(childMenus);
};

const makeDoMenuFunc = (menu: Menu) => {
  const flattened = flattenMenu(menu);
  //console.log("flattened : ", JSON.stringify(flattened, undefined, 4));
  const body = flattened
    .map((menu) => {
      return `if(menuID=="${menu.id}"){
          llDialog(user,${
            menu.message ? menu.message : "no message"
          },[${menu.options
        .map((option) => {
          return option.label ? option.label : "no label";
        })
        .join(",")}],channel);
      }`;
    })
    .join("\n");
  return new ScriptFunc(
    "doMenu",
    [],
    () => `${body}
  listener=llListen(channel,"",user,"");`
  );
};

export default makeDoMenuFunc;
