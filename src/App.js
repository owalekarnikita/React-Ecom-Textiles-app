import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navbar from "./routes/Navigation/navbar";
import Signin from "./routes/signin/signin";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route path="home" element={<Home />} />
        <Route path="nav" element={<Navbar />} />
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;
