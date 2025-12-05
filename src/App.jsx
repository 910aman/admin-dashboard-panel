import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EstateDashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard Route */}
        <Route path="/" element={<EstateDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
