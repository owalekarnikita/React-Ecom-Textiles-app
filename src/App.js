import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navbar from "./routes/Navigation/navbar";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route path="home" element={<Home />} />
        <Route path="nav" element={<Navbar />} />
      </Route>
    </Routes>
  );
}

export default App;
