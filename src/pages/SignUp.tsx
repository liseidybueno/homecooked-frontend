import EmailInput from "../components/inputs/EmailInput";
import TextInput from "../components/inputs/TextInput";
import PasswordInput from "../components/inputs/PasswordInput";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
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

  return (
    <div className="login-page">
      <div className="signup-box">
        <h1 className="login-header">Sign up!</h1>
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
          name="username"
          required={true}
          label="Email address"
          textInfo=""
          value={userInfo.username}
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

        <button className="loginSignupSubmit">Submit</button>
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
