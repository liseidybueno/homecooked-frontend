import EmailInput from "../components/inputs/EmailInput";
import TextInput from "../components/inputs/TextInput";
import PasswordInput from "../components/inputs/PasswordInput";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getData } from "../utils/data-utils";

export default function SignUp() {
  type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  function handleOnChange(event: any) {
    event.preventDefault();
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }

  function handleConfirmPasswordChange(event: any) {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    console.log("****inside handle");

    try {
      console.log("***inside try");
      const res: User = await getData("http://localhost:8000/signup", userInfo);
      console.log("****after sign up clicked");
      setUserInfo(res);
      console.log("****user info is", userInfo);
    } catch (error) {
      alert("User sign up failed");
      console.log(error);
    }
  }

  return (
    <div className="login-page">
      <div className="signup-box">
        <h1 className="login-header">Sign up!</h1>
        <form onSubmit={handleSubmit}>
          <div className="names-inputs">
            <TextInput
              name="firstName"
              required={true}
              label="First name"
              textInfo=""
              value={userInfo.firstName}
              onChange={handleOnChange}
            />
            <TextInput
              name="lastName"
              required={true}
              label="Last name"
              textInfo=""
              value={userInfo.lastName}
              onChange={handleOnChange}
            />
          </div>
          <EmailInput
            name="email"
            required={true}
            label="Email address"
            textInfo=""
            value={userInfo.email}
            onChange={handleOnChange}
          />
          <PasswordInput
            name="password"
            required={true}
            label="Password"
            textInfo="It must be a combination of minimum 8 letters, numbers, and
              symbols."
            value={userInfo.password}
            onChange={handleOnChange}
          />
          <PasswordInput
            name="confirmPassword"
            required={true}
            label="Confirm Password"
            textInfo=""
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <button type="submit" className="loginSignupSubmit">
            Submit
          </button>
        </form>
        <div className="oAuth-login-container">
          <p>Or sign up with:</p>
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
        <NavLink className="link" to="/login">
          <p className="no-account-yet">Already have an account?</p>
        </NavLink>
      </div>
    </div>
  );
}
