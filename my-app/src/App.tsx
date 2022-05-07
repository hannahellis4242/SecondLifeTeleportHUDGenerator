import React from "react";
import FileIO from "./components/FileIO";
import Output from "./components/Output";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MenuView from "./components/MenuView";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<FileIO />} />
        <Route path="/view" element={<MenuView />} />
        <Route path="/Edit" element={<div>TODO</div>} />
        <Route path="/Generate" element={<Output />} />
      </Routes>
    </Router>
  );
};

export default App;
