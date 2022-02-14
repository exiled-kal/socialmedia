import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Home />} />
    </Routes>
  )

};

export default App;
