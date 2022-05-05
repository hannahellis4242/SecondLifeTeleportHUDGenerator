import React, { useContext } from "react";
import { ModelContext } from "../store/ModelContext";

const Raw: React.FC = () => {
  const modelContext = useContext(ModelContext);
  return (
    <section>{JSON.stringify(modelContext.topMenu, undefined, 4)}</section>
  );
};

export default Raw;
