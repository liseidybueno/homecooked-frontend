import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextInput from "../components/inputs/TextInput";
import { getUser } from "../utils/data-utils";
import Button from "../components/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRequiredError, setIsRequiredError] = useState("");

  function handleOnChange(event: any) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  let navigate = useNavigate();
  function routeChange() {
    navigate("/login", { state: "/" });
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    if (email === "") {
      setIsRequiredError("Please provide an email address.");
    } else {
      setIsRequiredError("");

      try {
        const res: any = await getUser("http://localhost:8000/login", {
          email,
        });

        const loginResponse = res.loginResponse;

        if (loginResponse.canLogin) {
          setErrorMessage(() => "");
          routeChange();
        } else {
          setErrorMessage(() => loginResponse.errorMsg);
        }
      } catch (error) {
        alert("User sign up failed");
      }
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-header">Forgot Password?</h1>
        <p className="login-text">
          There is nothing to worry about, we'll send you a message to help you
          reset your password.
        </p>
        <form onSubmit={handleSubmit} className="login-form">
          <TextInput
            name="email"
            label="Email address"
            textInfo=""
            value={email}
            onChange={handleOnChange}
            errorMsg={isRequiredError}
          />
          <div>
            <p className="signup-login-error-msg">{errorMessage}</p>
          </div>
          <Button className="primary-button loginSignupSubmit">
            Send Reset Link
          </Button>
        </form>
      </div>
    </div>
  );
}
