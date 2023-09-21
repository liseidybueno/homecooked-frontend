import "../App.css";
import PrimaryButton from "./button/PrimaryButton";
import SecondaryButton from "./button/SecondaryButton";

export default function Header() {
  const loggedIn = false;

  return (
    <div className="header">
      <nav className="first-navbar">
        <img src="/images/homecooked.svg" />
        <ul className="seconday-navbar-menu">
          <li className="seconday-navbar-item">By Meal</li>
          <li className="seconday-navbar-item">By Cuisine</li>
          <li className="seconday-navbar-item">{`< 30 Minutes`}</li>
        </ul>
      </nav>
      <nav className="secondary-navbar">
        {loggedIn ? (
          <div className="right-side-nav">
            <button>Nav</button>
          </div>
        ) : (
          <div className="right-side-nav">
            <PrimaryButton className="login-button" text="Log In" />
            <SecondaryButton className="signup-button" text="Sign Up" />
          </div>
        )}
      </nav>
    </div>
  );
}
