import React, { useContext, useRef } from "react";
import { ModelContext } from "../store/ModelContext";
import classes from "./FileIO.module.css";

const FileIO: React.FC = () => {
  const modelContext = useContext(ModelContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const loadConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const configFile = fileList.item(0);
      if (configFile) {
        configFile
          .text()
          .then((data) => modelContext.setTopMenu(JSON.parse(data)));
      }
    }
  };
  const loadConfigButton = () => {
    const input = inputRef.current;
    if (input) {
      input.click();
    }
  };
  const saveConfig = () => {};

  return (
    <section>
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
    </section>
  );
};

export default FileIO;
