import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Registration from "./components/register_login/Registration";
import Login from "./components/register_login/Login";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AccountProvider from "./components/context/AccountProvider";

function App() {
  return (
    // <AccountProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
    // </AccountProvider>
  );
}

export default App;
