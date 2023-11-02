import TextInput from "../components/inputs/TextInput";
import PasswordInput from "../components/inputs/PasswordInput";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getData } from "../utils/data-utils";
import validator from "validator";

export default function SignUp(props: any) {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [validatePasswordMessages, setValidatePasswordMessages] = useState(
    new Array()
  );

  const [passwordsMatchMessage, setPasswordsMatchMessage] = useState("");

  const [errorMessages, setErrorMessages] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    passwordErr: "",
  });

  const [userExistsMessage, setUserExistsMessage] = useState("");

  function handleOnChange(event: any) {
    event.preventDefault();
    const { name, value } = event.target;

    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [name]: value.trimStart(),
      };
    });
  }

  function handlePasswordOnChange(event: any) {
    event.preventDefault();

    const password = event.target.value;

    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        password: password,
      };
    });
  }

  function handleConfirmedPasswordChange(event: any) {
    event.preventDefault();
    setConfirmedPassword(() => event.target.value);
  }

  function passwordValidation(password: string) {
    const validationMessage = new Array();

    if (password.length < 8) {
      validationMessage.push("Password must be 8 characters or longer.");
    }

    if (!/[a-z]/.test(password)) {
      validationMessage.push("Password must contain an lowercase letter.");
    }

    if (!/[A-Z]/.test(password)) {
      validationMessage.push("Password must contain an uppercase letter.");
    }

    if (!/\d/.test(password)) {
      validationMessage.push("Password must contain a number");
    }

    return validationMessage;
  }

  function isRequired(name: string, value: string, errorMsg: string) {
    if (value === "") {
      setErrorMessages((prevErrorMsg) => {
        return {
          ...prevErrorMsg,
          [name]: errorMsg,
        };
      });
    } else {
      setErrorMessages((prevErrorMsg) => {
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

    //clear error messsage
    setUserExistsMessage("");

    isRequired("firstNameErr", userInfo.firstName, "First name is required.");
    isRequired("lastNameErr", userInfo.lastName, "Last name is required.");
    isRequired("emailErr", userInfo.email, "Email is required.");

    //check that email has @ symbol
    if (userInfo.email) {
      const errMsg = !userInfo.email.includes("@")
        ? "Email must be valid and include an @ symbol."
        : "";
      setErrorMessages((prevErrorMsg) => {
        return {
          ...prevErrorMsg,
          emailErr: errMsg,
        };
      });
    }

    const validatePassword = passwordValidation(userInfo.password);

    setValidatePasswordMessages(validatePassword);

    const checkPasswordsMatch = validator.equals(
      userInfo.password,
      confirmedPassword
    );

    if (!checkPasswordsMatch) {
      setPasswordsMatchMessage("Passwords must match.");
    } else {
      setPasswordsMatchMessage("");
    }

    //clear passwords on submit
    setConfirmedPassword("");
    setUserInfo((prevUserInfo) => {
      return { ...prevUserInfo, password: "" };
    });

    if (validatePassword.length > 0 || !checkPasswordsMatch) {
      return;
    }

    try {
      const res: any = await getData("http://localhost:8000/signup", userInfo);

      if (res.userExists) {
        setUserExistsMessage(() => {
          return "This user already exists! Please log in or use a different email address.";
        });
      } else {
        setUserExistsMessage("");
        localStorage.setItem("currentUser", JSON.stringify(userInfo));
        props.setLoggedIn(true);
        routeChange();
      }
    } catch (error) {
      alert("User sign up failed");
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
              label="First name"
              textInfo=""
              value={userInfo.firstName}
              onChange={handleOnChange}
              errorMsg={errorMessages.firstNameErr}
            />
            <TextInput
              name="lastName"
              label="Last name"
              textInfo=""
              value={userInfo.lastName}
              onChange={handleOnChange}
              errorMsg={errorMessages.lastNameErr}
            />
          </div>
          <TextInput
            name="email"
            label="Email address"
            textInfo=""
            value={userInfo.email}
            onChange={handleOnChange}
            errorMsg={errorMessages.emailErr}
          />
          <PasswordInput
            name="password"
            label="Password"
            textInfo="Password must be a minimum of 8 characters and contain capital letters, lowercase letters, and numbers."
            value={userInfo.password}
            onChange={handlePasswordOnChange}
          />
          {validatePasswordMessages &&
            validatePasswordMessages.map((message) => {
              return (
                <p id={message} className="form-error-msg">
                  {message}
                </p>
              );
            })}
          <PasswordInput
            name="confirmedPassword"
            label="Confirm Password"
            textInfo=""
            value={confirmedPassword}
            onChange={handleConfirmedPasswordChange}
          />
          {passwordsMatchMessage && (
            <p className="form-error-msg">{passwordsMatchMessage}</p>
          )}
          {userExistsMessage && (
            <p className="signup-login-error-msg">{userExistsMessage}</p>
          )}
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
