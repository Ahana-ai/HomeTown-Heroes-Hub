import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    // <AccountProvider>
    <Router>
      <Navbar account={true} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </Router>
    // </AccountProvider>
  );
}

export default App;
