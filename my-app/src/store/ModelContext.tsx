import React, { createContext, useState } from "react";
import Menu from "../model/Menu";
import Option from "../model/Option";
import { v4 } from "uuid";
import { addOption } from "../model/Utils/addOption";
import { removeOption } from "../model/Utils/removeOption";
import { updateOption } from "../model/Utils/updateOption";

interface IModelContext {
  topMenu: Menu;
  editId: string | null;
  setTopMenu(menu: Menu): void;
  setEditId(id?: string): void;
  addOption(id: string, option: Option): void;
  removeOption(id: string): void;
  updateOption(menuId: string, optionId: string, option: Option): void;
}

//TODO remove this vvvv
const topLevelID = v4();

export const ModelContext = createContext<IModelContext>({
  topMenu: { id: topLevelID, options: [] },
  editId: topLevelID,
  setTopMenu(menu: Menu): void {},
  setEditId(id?: string): void {},
  addOption(id: string, option: Option) {},
  removeOption(id: string) {},
  updateOption(menuId: string, optionId: string, option: Option) {},
});

const ModelContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [menuState, setMenuState] = useState<Menu>({
    id: v4(),
    options: [],
  });

  const [editState, setEditState] = useState<string | null>(null);

  const setMenuHandler = (menu: Menu) => {
    setMenuState((current) => menu);
  };

  const addOptionHandler = (id: string, option: Option) => {
    setMenuState((current) => addOption(current, id, option));
  };

  const removeOptionHandler = (id: string) => {
    setMenuState((current) => removeOption(current, id));
  };

  const setEditIDHandler = (id?: string) => {
    if (id) {
      setEditState(() => id);
    } else {
      setEditState(() => null);
    }
  };

  const updateOptionHandler = (
    menuId: string,
    optionId: string,
    option: Option
  ) => {
    setMenuState((current) => {
      const { result, success } = updateOption(
        current,
        menuId,
        optionId,
        option
      );
      if (!success) {
        //just going to it
        console.log("could not update");
      }
      return result;
    });
  };

  const context = {
    topMenu: menuState,
    editId: editState,
    setTopMenu: setMenuHandler,
    setEditId: setEditIDHandler,
    addOption: addOptionHandler,
    removeOption: removeOptionHandler,
    updateOption: updateOptionHandler,
  };
  return (
    <ModelContext.Provider value={context}>
      {props.children}
    </ModelContext.Provider>
  );
};

export default ModelContextProvider;
