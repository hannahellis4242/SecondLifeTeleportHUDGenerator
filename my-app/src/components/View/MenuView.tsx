import React, { useContext } from "react";
import MenuTag from "./MenuTag";
import { ModelContext } from "../../store/ModelContext";
import Navigation from "../Navigation";
import Main from "../Main";

const View: React.FC = () => {
  const modelContext = useContext(ModelContext);
  return (
    <section>
      <Navigation active="View" />
      <Main>
        <MenuTag value={modelContext.topMenu} />
      </Main>
    </section>
  );
};

export default View;
