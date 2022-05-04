import React, { useContext } from "react";
import { ModelContext } from "../store/ModelContext";

const Output: React.FC = () => {
  const modelContext = useContext(ModelContext);
  return (
    <section>
      <div>
        <button>Generate</button>
      </div>
      <textarea></textarea>
    </section>
  );
};

export default Output;
