import "./assets/css/reset.css";
import "./assets/css/root.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registro from "./pages/Registro/Registro";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import TabUser from "./pages/TabUser/TabUser";
import { useState } from "react";

function App() {
  const [idAccount, setIdAccount] = useState("");
  const [idTablero, setIdTablero] = useState("");

  const accountId = (idUser) => setIdAccount(idUser);
  const tabId = (idTab) => setIdTablero(idTab);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/dashboard/:id/home'
          element={<Dashboard accountId={accountId} tabId={tabId} />}
        />
        <Route
          path='/dashboard/:id/tableros/:id'
          element={<TabUser idAccount={idAccount} idTablero={idTablero} />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
