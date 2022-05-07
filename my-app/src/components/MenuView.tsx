import React, { useContext } from "react";
import MenuTag from "./MenuTag";
import { ModelContext } from "../store/ModelContext";
import Navigation from "./Navigation";

const MenuView: React.FC = () => {
  const modelContext = useContext(ModelContext);
  return (
    <section>
      <Navigation active="View" />
      <main>
        <MenuTag value={modelContext.topMenu} />
      </main>
    </section>
  );
};

export default MenuView;
