import React from "react";
import FileIO from "./components/FileIO";
import Generate from "./components/Generate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuView from "./components/MenuView";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FileIO />} />
        <Route path="/view" element={<MenuView />} />
        <Route path="/Edit" element={<div>TODO</div>} />
        <Route path="/Generate" element={<Generate />} />
      </Routes>
    </Router>
  );
};

export default App;
