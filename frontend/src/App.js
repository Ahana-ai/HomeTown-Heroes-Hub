import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ConnectWithUs from "./components/landingPage/ConnectWithUs";
import Testimonials from "./components/landingPage/Testimonials";
import Registration from "./components/register_login/Registration";
import Login from "./components/register_login/Login";
import JumpingScrollIcon from "./components/JumpingScrollIcon";
import { useSelector } from "react-redux";
import { selectUser } from "./store/slices/UserSlice";

function App() {
  const user = useSelector(selectUser);
  // if (!user) {
  //   // Handle the case where user is undefined, e.g., redirect to login
  //   return <Link to="/connect" />;
  // }

  return (
    <Router>
      <JumpingScrollIcon />
      <Navbar user={user} />
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
