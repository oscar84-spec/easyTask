import "./assets/css/reset.css";
import "./assets/css/root.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registro from "./pages/Registro/Registro";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard/:id/home' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
