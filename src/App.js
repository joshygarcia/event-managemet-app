import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
