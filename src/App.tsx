import "./css/App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPageSections/MainPage";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  // const [isLoginOrSignup, setIsLoginOrSignup] = useState(false);
  // console.log("****isLoginOrSignup", isLoginOrSignup);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <Header
        // isLoginOrSignup={isLoginOrSignup}
        // setIsLoginOrSignup={setIsLoginOrSignup}
        setUser={setUser}
      />
      <Routes>
        <Route
          path="/"
          // element={<MainPage setIsLoginOrSignup={setIsLoginOrSignup} />}
        />
        <Route
          path="/login"
          element={
            <LogIn
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              user={user}
              setUser={setUser}
            />
          }
          // element={<LogIn setIsLoginOrSignup={setIsLoginOrSignup} />}
        />
      </Routes>
      {/* <Route path="/" element={<MainPage />} /> */}
      {/* <MainPage /> */}
      <Footer />
    </>
  );
}

export default App;
