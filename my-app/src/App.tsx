import React, { useContext } from "react";
import MenuTag from "./components/MenuTag";
import Output from "./components/Output";
import Raw from "./components/Raw";
import { ModelContext } from "./store/ModelContext";

const App: React.FC = () => {
  const modelContext = useContext(ModelContext);
  return (
    <div>
      <MenuTag value={modelContext.topMenu} />
      <Raw />
      <Output />
    </div>
  );
};

export default App;
