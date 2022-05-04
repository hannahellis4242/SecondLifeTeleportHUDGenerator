import React, { useContext } from "react";
import MenuTag from "./components/MenuTag";
import { ModelContext } from "./store/ModelContext";

const App: React.FC = () => {
  const modelContext = useContext(ModelContext);
  return (
    <div>
      <MenuTag value={modelContext.topMenu} />
    </div>
  );
};

export default App;
