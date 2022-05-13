import React from "react";
import FileIO from "./components/FileIO";
import Generate from "./components/Generate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit/Edit";
import View from "./components/View/MenuView";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FileIO />} />
        <Route path="/view" element={<View />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Generate" element={<Generate />} />
      </Routes>
    </Router>
  );
};

export default App;
