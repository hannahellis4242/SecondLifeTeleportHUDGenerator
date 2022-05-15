import { FunctionComponent, useContext } from "react";
import MenuTag from "./MenuTag";
import { ModelContext } from "../../store/ModelContext";
import Navigation from "../components/Navigation";
import Main from "../components/Main";

const View: FunctionComponent = () => {
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
