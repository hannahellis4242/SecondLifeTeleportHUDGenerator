import React, { useContext } from "react";
import { ModelContext } from "../store/ModelContext";

const Raw: React.FC = () => {
  const modelContext = useContext(ModelContext);
  return (
    <section>
      <header>Config</header>
      <p>{JSON.stringify(modelContext.topMenu, undefined, 2)}</p>
    </section>
  );
};

export default Raw;
