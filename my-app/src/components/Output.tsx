import React, { useContext, useRef } from "react";
import createScript from "../script/createScript";
import { ModelContext } from "../store/ModelContext";

const Output: React.FC = () => {
  const modelContext = useContext(ModelContext);
  const output = useRef<HTMLParagraphElement>(null);

  const generate = () => {
    const out = output.current;
    if (out) {
      out.innerText = createScript(modelContext.topMenu);
    }
  };
  return (
    <section>
      <div>
        <button onClick={generate}>Generate</button>
      </div>
      <p ref={output}></p>
    </section>
  );
};

export default Output;
