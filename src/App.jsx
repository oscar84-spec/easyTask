import "./assets/css/reset.css";
import "./assets/css/root.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registro from "./pages/Registro/Registro";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
