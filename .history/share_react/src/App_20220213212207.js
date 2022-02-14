import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
