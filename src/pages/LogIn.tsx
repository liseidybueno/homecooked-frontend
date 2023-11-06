import { NavLink, useNavigate } from "react-router-dom";
import PasswordInput from "../components/inputs/PasswordInput";
import { useState } from "react";
import TextInput from "../components/inputs/TextInput";
import { getUser } from "../utils/data-utils";
import Button from "../components/Button";

export default function LogIn(props: any) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isRequiredErrors, setIsRequiredErrors] = useState({
    emailErr: "",
    passwordErr: "",
  });

  function handleOnChange(event: any) {
    event.preventDefault();
    const { name, value } = event.target;
    setUserInfo((prevUserInfo: any) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }

  function isRequired(name: string, value: string, errorMsg: string) {
    if (value === "") {
      setIsRequiredErrors((prevErrorMsg) => {
        return {
          ...prevErrorMsg,
          [name]: errorMsg,
        };
      });
    } else {
      setIsRequiredErrors((prevErrorMsg) => {
        return {
          ...prevErrorMsg,
          [name]: "",
        };
      });
    }
  }

  let navigate = useNavigate();
  function routeChange() {
    navigate("/", { state: "/" });
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    const username = userInfo.email;
    const password = userInfo.password;

    isRequired("emailErr", username, "Email address is required.");
    isRequired("passwordErr", password, "Password is required");

    try {
      const res: any = await getUser("http://localhost:8000/login", {
        email: username,
      });

      const loginResponse = res.loginResponse;

      if (loginResponse.canLogin) {
        if (password === loginResponse.user.password) {
          setErrorMessage("");
          localStorage.setItem(
            "currentUser",
            JSON.stringify(loginResponse.user)
          );
          props.setLoggedIn(true);
          routeChange();
        } else {
          setErrorMessage(() => "Password is incorrect. Please try again.");
        }
      } else {
        setErrorMessage(() => loginResponse.errorMsg);
      }
    } catch (error) {
      alert("User sign up failed");
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-header">Welcome Back</h1>
        <p className="login-text">Please log in to continue</p>
        <form onSubmit={handleSubmit} className="login-form">
          <TextInput
            name="email"
            label="Email address"
            textInfo=""
            value={userInfo.email}
            onChange={handleOnChange}
            errorMsg={isRequiredErrors.emailErr}
          />
          <PasswordInput
            name="password"
            label="Password"
            textInfo="It must be a combination of minimum 8 letters, numbers, and
              symbols."
            value={userInfo.password}
            onChange={handleOnChange}
          />
          <p className="form-error-msg">{isRequiredErrors.passwordErr}</p>
          <div className="rememberMe-forgotPw">
            <div className="rememberMe">
              <input type="checkbox" name="rememberMe"></input>
              <label className="checkbox-label">Remember me</label>
            </div>
            <span className="forgot-password">Forgot password?</span>
          </div>
          <div>
            <p className="signup-login-error-msg">{errorMessage}</p>
          </div>
          <Button className="primary-button loginSignupSubmit">Log In</Button>
        </form>
        <div className="oAuth-login-container">
          <p>Or log in with:</p>
          <div className="oAuth-login-choices">
            <div className="oAuth-login">
              <img src="/images/logos/google-logo.svg" />
              <span className="oauth-name">Google</span>
            </div>
            <div className="oAuth-login">
              <img src="/images/logos/apple-logo.svg" />
              <span className="oauth-name">Apple</span>
            </div>
          </div>
        </div>
        <NavLink className="link" to="/signup">
          <p className="no-account-yet">No account yet? Sign up</p>
        </NavLink>
      </div>
    </div>
  );
}
