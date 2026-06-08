import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Registerco from "./pages/Registerco";
import SeeComplaints from "./pages/SeeComplaints";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/complaint" element={<Registerco />} />
          <Route path="/register/See" element={<SeeComplaints />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;