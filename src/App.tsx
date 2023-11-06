import "./css/App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import LogIn from "./pages/LogIn";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("currentUser"));

  return (
    <>
      <Header
        setUser={setCurrentUser}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>

      {/* <Route path="/" element={<MainPage />} /> */}
      {/* <MainPage /> */}
      <Footer />
    </>
  );
}

export default App;
