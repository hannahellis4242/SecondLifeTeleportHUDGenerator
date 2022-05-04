import Menu, { Option } from "../model/scriptModel";
import ScriptFunc from "./ScriptFunc";
import flattenMenu from "./utils/flattenMenu";

const makeDoMenuFunc = (menu: Menu) => {
  const [_, ...decendants] = flattenMenu(menu);
  const body = decendants
    .map((menu) => {
      return `if(menuID=="${menu.id}"){
          llDialog(user,"${
            menu.message ? menu.message : "no message"
          }",[${menu.options
        .map((option) => {
          return `"${option.label ? option.label : "no label"}"`;
        })
        .join(",")}],channel);
      }`;
    })
    .join("\n");
  return new ScriptFunc(
    "doMenu",
    [],
    () => `${body}
    llListenRemove(listener);
  listener=llListen(channel,"",user,"");`
  );
};

export default makeDoMenuFunc;
