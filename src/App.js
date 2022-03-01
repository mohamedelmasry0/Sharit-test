import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import React from "react";

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<User />} />
      </Routes>
    </BrowserRouter>
);
export default App;
