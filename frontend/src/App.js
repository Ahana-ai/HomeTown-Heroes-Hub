import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ConnectWithUs from "./components/landingPage/ConnectWithUs";
import Testimonials from "./components/landingPage/Testimonials";
import Registration from "./components/register_login/Registration";
import Login from "./components/register_login/Login";
import JumpingScrollIcon from "./components/JumpingScrollIcon";

function App() {
  return (
    <Router>
      <JumpingScrollIcon />
      <Navbar user={true} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/connect" element={<ConnectWithUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
