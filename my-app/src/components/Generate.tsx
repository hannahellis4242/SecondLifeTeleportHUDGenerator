import saveAs from "file-saver";
import React, { useContext, useEffect, useRef } from "react";
import createScript from "../script/createScript";
import { ModelContext } from "../store/ModelContext";
import classes from "./Generate.module.css";
import Main from "./Main";
import Navigation from "./Navigation";

const Generate: React.FC = () => {
  const modelContext = useContext(ModelContext);
  const output = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const out = output.current;
    if (out) {
      out.innerText = createScript(modelContext.topMenu);
    }
  }, [modelContext]);

  const copyText = () => {
    const out = output.current;
    if (out) {
      navigator.clipboard
        .writeText(out.innerText)
        .then(() => alert("script copied to clipboard"))
        .catch(() => alert("could not copy"));
    }
  };

  const saveScript = () => {
    const out = output.current;
    if (out) {
      const blob = new Blob([out.innerText], {
        type: "application/text",
      });
      saveAs(blob, "script.lsl");
    }
  };

  return (
    <section>
      <Navigation active="Generate" />
      <Main>
        <section className={classes.output}>
          <header className={classes.head}>
            <div>Script Code</div>
            <div className={classes.control}>
              <button className={classes.right} onClick={copyText}>
                copy
              </button>
              <button className={classes.right} onClick={saveScript}>
                Save
              </button>
            </div>
          </header>
          <p className={classes.output_text} ref={output}></p>
        </section>
      </Main>
    </section>
  );
};

export default Generate;
