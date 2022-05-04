import React, { createContext, useState } from "react";
import Menu from "../model/Menu";
import Option from "../model/Option";
import { v4 } from "uuid";
import { addOption } from "../model/Utils/addOption";
import { removeOption } from "../model/Utils/removeOption";

interface IModelContext {
  topMenu: Menu;
  addOption(id: string, option: Option): void;
  removeOption(id: string): void;
}

export const ModelContext = createContext<IModelContext>({
  topMenu: { id: v4().toString(), options: [] },
  addOption(id: string, option: Option) {},
  removeOption(id: string) {},
});

const ModelContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [result, setResult] = useState<Menu>({
    id: v4().toString(),
    options: [],
  });

  const addOptionHandler = (id: string, option: Option) => {
    setResult((current) => addOption(current, id, option));
  };

  const removeOptionHandler = (id: string) => {
    setResult((current) => removeOption(current, id));
  };

  const context = {
    topMenu: result,
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
