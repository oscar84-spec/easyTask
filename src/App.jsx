import "./assets/css/reset.css";
import "./assets/css/root.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registro from "./pages/Registro/Registro";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import TabUser from "./pages/TabUser/TabUser";
import { useState } from "react";
import Page404 from "./pages/Page404/Page404";

function App() {
  const [idAccount, setIdAccount] = useState("");
  const [idTablero, setIdTablero] = useState("");
  const [theme, setTheme] = useState("");

  const accountId = (idUser) => setIdAccount(idUser);
  const tabId = (idTab) => setIdTablero(idTab);
  const obtenerTema = (tema) => setTheme(tema);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/dashboard/:id/home'
          element={
            <Dashboard
              accountId={accountId}
              tabId={tabId}
              obtenerTema={obtenerTema}
            />
          }
        />
        <Route
          path='/dashboard/:id/tableros/:id'
          element={
            <TabUser idAccount={idAccount} idTablero={idTablero} tema={theme} />
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
