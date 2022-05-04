import React, { useContext, useRef } from "react";
import createScript from "../script/createScript";
import { ModelContext } from "../store/ModelContext";
import classes from "./Output.module.css";

const Output: React.FC = () => {
  const modelContext = useContext(ModelContext);
  const output = useRef<HTMLParagraphElement>(null);

  const generate = () => {
    const out = output.current;
    if (out) {
      out.innerText = createScript(modelContext.topMenu);
    }
  };

  const copyText = () => {
    const out = output.current;
    if (out) {
      navigator.clipboard
        .writeText(out.innerText)
        .then(() => alert("seed copied to clipboard"))
        .catch(() => alert("could not copy"));
    }
  };
  return (
    <section className={classes.output}>
      <header className={classes.head}>
        <button className={classes.generate} onClick={generate}>
          Generate
        </button>
        <button className={classes.copy} onClick={copyText}>
          copy
        </button>
      </header>
      <p className={classes.output_text} ref={output}></p>
    </section>
  );
};

export default Output;
