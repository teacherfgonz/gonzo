import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/sass/app.scss";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} path="/">
          <Route element={<Dashboard />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
