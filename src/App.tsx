import "./css/App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPageSections/MainPage";
import Footer from "./components/Footer";
import LogIn from "./pages/LogIn";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUp from "./pages/SignUp";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <Header setUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={
            <LogIn
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              user={currentUser}
              setUser={setCurrentUser}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* <Route path="/" element={<MainPage />} /> */}
      {/* <MainPage /> */}
      <Footer />
    </>
  );
}

export default App;
