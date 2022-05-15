import React, { useContext, useRef } from "react";
import { ModelContext } from "../../store/ModelContext";
import { saveAs } from "file-saver";
import { v4 } from "uuid";
import Menu from "../../model/Menu";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import classes from "./FileIO.module.css";

const identifyMenu = (menu: Menu) => {
  if (!menu.id) {
    menu.id = v4().toString();
  }
  menu.options.forEach((option) => {
    if (!option.id) {
      option.id = v4().toString();
    }
    if (option.action.menu) {
      identifyMenu(option.action.menu);
    }
  });
  return menu;
};

const parentifyMenu = (menu: Menu, parent?: Menu) => {
  if (!menu.parentId && parent) {
    menu.parentId = parent.id;
  }
  menu.options.forEach(({ action }) => {
    if (action.menu) {
      parentifyMenu(action.menu, menu);
    }
  });
  return menu;
};

const FileIO: React.FC = () => {
  const modelContext = useContext(ModelContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const loadConfig = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = target.files;
    if (fileList) {
      const configFile = fileList.item(0);
      if (configFile) {
        configFile
          .text()
          .then((data) => JSON.parse(data))
          .then(identifyMenu)
          .then(parentifyMenu)
          .then((data) => modelContext.setTopMenu(data))
          .then(() => navigate("/View"));
      }
    }
  };
  const loadConfigButton = () => {
    const input = inputRef.current;
    if (input) {
      input.click();
    }
  };
  const saveConfig = () => {
    const blob = new Blob([JSON.stringify(modelContext.topMenu, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "config.json");
  };
  return (
    <section>
      <Navigation active="Home" />
      <Main>
        <input
          ref={inputRef}
          type="file"
          id="input"
          onChange={loadConfig}
          accept=".json"
          className={classes.not_visable}
        />
        <button onClick={loadConfigButton}>Load Config</button>
        <button onClick={saveConfig}>Save Config</button>
      </Main>
    </section>
  );
};

export default FileIO;
