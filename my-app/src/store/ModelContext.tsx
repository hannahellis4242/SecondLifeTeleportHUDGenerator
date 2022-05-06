import React, { createContext, useState } from "react";
import Menu from "../model/Menu";
import Option from "../model/Option";
import { v4 } from "uuid";
import { addOption } from "../model/Utils/addOption";
import { removeOption } from "../model/Utils/removeOption";

interface IModelContext {
  topMenu: Menu;
  editId: string | null;
  setTopMenu(menu: Menu): void;
  setEditId(id?: string): void;
  addOption(id: string, option: Option): void;
  removeOption(id: string): void;
}

export const ModelContext = createContext<IModelContext>({
  topMenu: { id: v4().toString(), options: [] },
  editId: null,
  setTopMenu(menu: Menu): void {},
  setEditId(id?: string): void {},
  addOption(id: string, option: Option) {},
  removeOption(id: string) {},
});

const ModelContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [menuState, setMenuState] = useState<Menu>({
    id: v4().toString(),
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

  const context = {
    topMenu: menuState,
    editId: editState,
    setTopMenu: setMenuHandler,
    setEditId: setEditIDHandler,
    addOption: addOptionHandler,
    removeOption: removeOptionHandler,
  };
  return (
    <ModelContext.Provider value={context}>
      {props.children}
    </ModelContext.Provider>
  );
};

export default ModelContextProvider;
