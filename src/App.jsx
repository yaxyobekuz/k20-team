import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
