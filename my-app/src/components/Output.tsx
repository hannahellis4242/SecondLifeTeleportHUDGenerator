import React, { useContext, useEffect, useRef } from "react";
import createScript from "../script/createScript";
import { ModelContext } from "../store/ModelContext";
import classes from "./Output.module.css";

const Output: React.FC = () => {
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
  return (
    <section className={classes.output}>
      <header className={classes.head}>
        <div>Script Code</div>
        <div className={classes.control}>
          <button className={classes.right} onClick={copyText}>
            copy
          </button>
        </div>
      </header>
      <p className={classes.output_text} ref={output}></p>
    </section>
  );
};

export default Output;
