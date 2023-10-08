import { NavLink } from "react-router-dom";
import EmailInput from "../components/inputs/EmailInput";
import PasswordInput from "../components/inputs/PasswordInput";

export default function LogIn(props: any) {
  function handleOnChange(event: any) {
    event.preventDefault();
    const { name, value } = event.target;
    props.setCurrentUser((prevUserInfo: any) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }
  async function handleSubmit(event: any) {
    event.preventDefault();

    const username = props.username;
    const password = props.password;

    const currentUser = { username, password };
    props.setCurrentUser(currentUser);

    //look for the user in the DB and then set local storage to item
    localStorage.setItem("currentUser", props.currentUser);
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-header">Welcome Back</h1>
        <p className="login-text">Please log in to continue</p>
        <form onSubmit={handleSubmit} className="login-form">
          <EmailInput
            name="email"
            required={true}
            label="Email address"
            textInfo=""
            value={props.username}
            onChange={handleOnChange}
          />
          <PasswordInput
            name="password"
            required={true}
            label="Password"
            textInfo="It must be a combination of minimum 8 letters, numbers, and
              symbols."
            value={props.password}
            onChange={handleOnChange}
          />
          <div className="rememberMe-forgotPw">
            <div className="rememberMe">
              <input type="checkbox" name="rememberMe"></input>
              <label className="checkbox-label">Remember me</label>
            </div>
            <span className="forgot-password">Forgot password?</span>
          </div>
          <button className="loginSignupSubmit">Log In</button>
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
