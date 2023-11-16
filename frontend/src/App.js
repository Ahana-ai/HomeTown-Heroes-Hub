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
import MyProfileView from "./components/profiles/MyProfileView";
import FeedPost from "./components/feed/Feed";
import MessagingComponent from "./components/message/Conversations";
import Network from "./components/networks/Network";
import Notification from "./components/notifications/Notification";
import EditForm from "./components/editForm/EditForm";
import Settings from "./components/settings/Settings";
import AddPost from "./components/profiles/posts/AddPost";

function App() {
  return (
    <Router>
      <JumpingScrollIcon />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/connect" element={<ConnectWithUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<MyProfileView />} />
        <Route path="/feed" element={<FeedPost />} />
        <Route path="/messages" element={<MessagingComponent />} />
        <Route path="/network" element={<Network />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
