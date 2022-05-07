import React, { useContext } from "react";
import MenuTag from "./MenuTag";
import { ModelContext } from "../store/ModelContext";

const MenuView: React.FC = () => {
  const modelContext = useContext(ModelContext);
  return <MenuTag value={modelContext.topMenu} />;
};

export default MenuView;
