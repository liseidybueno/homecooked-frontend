import { useForm } from "react-hook-form";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";
import { useState } from "react";

export default function LogIn(props: any) {
  // props.setIsLoginOrSignup(true);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data: any) => {
  //   console.log(data);
  // };
  // const username = props.username;
  // const password = props.password;

  async function handleSubmit(event: any) {
    event.preventDefault();

    console.log("****Props username", props.username);
    console.log("****props pw", props.password);

    const username = props.username;
    const password = props.password;

    const user = { username, password };

    //get response from backend API call
    //if successful, set user
    props.setUser(user);
    console.log("***props.user", props.user);
    localStorage.setItem("user", JSON.stringify(props.user));
    console.log("***success!", props.user);

    // console.log('****username', )
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
            setUsername={props.setUsername}
            username={props.username}
          />
          {/* <Input name="email" className="inputs" required={true} type="email" /> */}
          {/* <input type="email" {...register("email")}></input> */}
          <PasswordInput
            name="password"
            required={true}
            label="Password"
            textInfo="It must be a combination of minimum 8 letters, numbers, and
              symbols."
            value={props.password}
          />
          <div className="rememberMe-forgotPw">
            <div className="rememberMe">
              <input type="checkbox" name="rememberMe"></input>
              <label className="rememberMe-label">Remember me</label>
            </div>
            <span className="forgot-password">Forgot password?</span>
          </div>
          <button className="loginSignupSubmit">Log In</button>
          {/* <br />
          <hr className="line-break" /> */}
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
        <p className="no-account-yet">No account yet? Sign up</p>
      </div>
    </div>
  );
}
