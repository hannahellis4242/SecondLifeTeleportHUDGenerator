import React from "react";
import FileIO from "./Pages/Home/FileIO";
import Generate from "./Pages/Generate/Generate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Pages/Edit/Edit";
import View from "./Pages/View/MenuView";
import { about, edit, generate, home, view } from "./Pages/components/urlPath";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={home} element={<FileIO />} />
        <Route path={view} element={<View />} />
        <Route path={edit} element={<Edit />} />
        <Route path={generate} element={<Generate />} />
        <Route path={about} element={<div>TODO</div>} />
      </Routes>
    </Router>
  );
};

export default App;
