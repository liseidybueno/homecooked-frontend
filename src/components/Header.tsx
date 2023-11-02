import { useState } from "react";
import "../css/App.css";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { NavLink } from "react-router-dom";
library.add(faBars);

export default function Header(props: any) {
  const [isByMealMenuShown, setMealMenuShown] = useState(false);
  const [isByCuisineMenuShown, setCuisineMenuShown] = useState(false);
  const [isProfileMenuShown, setProfileMenuShown] = useState(false);

  function handleLogout() {
    props.setUser({ username: "", password: "" });
    localStorage.removeItem("currentUser");
    props.setLoggedIn(false);
  }

  return (
    <div className="header">
      <nav className="first-navbar">
        <img src="/images/homecooked.svg" />
        <ul className="seconday-navbar-menu">
          <li
            onClick={() => setMealMenuShown(!isByMealMenuShown)}
            className="seconday-navbar-item"
          >
            By Meal
            <img className="menu-down-arrow" src="/images/menu-down.png" />
          </li>
          <li
            onClick={() => setCuisineMenuShown(!isByCuisineMenuShown)}
            className="seconday-navbar-item"
          >
            By Cuisine
            <img className="menu-down-arrow" src="/images/menu-down.png" />
          </li>
          <li className="seconday-navbar-item">{`< 30 Minutes`}</li>
        </ul>

        {isByMealMenuShown && !isByCuisineMenuShown && (
          <div
            onMouseOver={() => setMealMenuShown(true)}
            onMouseOut={() => setMealMenuShown(false)}
            className="navbar-dropdown-menu"
          >
            <ul className="navbar-dropdown-menu-items">
              <li className="navbar-dropdown-menu-item">Appetizers</li>
              <li className="navbar-dropdown-menu-item">Breakfast</li>
              <li className="navbar-dropdown-menu-item">Lunch</li>
              <li className="navbar-dropdown-menu-item">Dinner</li>
              <li className="navbar-dropdown-menu-item">Dessert</li>
              <li className="navbar-dropdown-menu-item">Snacks</li>
            </ul>
          </div>
        )}

        {isByCuisineMenuShown && !isByMealMenuShown && (
          <div
            onMouseOver={() => setCuisineMenuShown(true)}
            onMouseOut={() => setCuisineMenuShown(false)}
            className="cuisine-menu navbar-dropdown-menu"
          >
            <ul className="navbar-dropdown-menu-items">
              <li className="navbar-dropdown-menu-item">American</li>
              <li className="navbar-dropdown-menu-item">Italian</li>
              <li className="navbar-dropdown-menu-item">Spanish</li>
              <li className="navbar-dropdown-menu-item">Mexican</li>
              <li className="navbar-dropdown-menu-item">Indian</li>
              <li className="navbar-dropdown-menu-item">Caribbean</li>
              <li className="navbar-dropdown-menu-item">Greek</li>
            </ul>
          </div>
        )}
      </nav>
      {/* {!props.user && ( */}
      <nav className="secondary-navbar">
        {props.loggedIn ? (
          <div className="loggedin-nav right-side-nav">
            <img className="profile-pic" src="/images/profilepic.jpg" />
            <div
              onClick={() => setProfileMenuShown(!isProfileMenuShown)}
              className="hamburger-nav"
            >
              <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
            </div>
            {isProfileMenuShown && (
              <div className="profile-menu navbar-dropdown-menu">
                <ul className="navbar-dropdown-menu-items">
                  <li className="profile-menu-item">Home</li>
                  <li className="profile-menu-item">Profile</li>
                  <li className="profile-menu-item">My Recipes</li>
                  <li className="profile-menu-item">Add Recipe</li>
                  <li className="profile-menu-item">Saved Recipes</li>
                  <li className="profile-menu-item">Account</li>
                  <li className="profile-menu-item">Help</li>
                  <li onClick={handleLogout} className="profile-menu-item">
                    Log out
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="right-side-nav">
            <NavLink to="/login">
              <PrimaryButton className="login-button" text="Log In" />
            </NavLink>
            <NavLink to="/signup">
              <SecondaryButton className="signup-button" text="Sign Up" />
            </NavLink>
          </div>
        )}
      </nav>
      <nav className="mobile-menu">
        {/* <div
          onClick={() => setProfileMenuShown(!isProfileMenuShown)}
          className="mobile-hamburger-nav"
        > */}
        <FontAwesomeIcon
          onClick={() => setProfileMenuShown(!isProfileMenuShown)}
          className="mobile-hamburger-nav"
          icon={faBars}
          style={{ color: "#000000" }}
          size="2x"
        />
        {isProfileMenuShown && !props.loggedIn && (
          <div className="mobile-dropdown navbar-dropdown-menu">
            <ul className="navbar-dropdown-menu-items">
              <li className="profile-menu-item">Home</li>
              <li className="profile-menu-item">Search Recipes</li>
              <li className="profile-menu-subitem">By Meal</li>
              <li className="profile-menu-subitem">By Cuisine</li>
              <li className="profile-menu-subitem">{"<"} 30 Minutes</li>
              <li className="profile-menu-item">Log in</li>
              <li className="profile-menu-item">Sign up</li>
              <li className="profile-menu-item">Help</li>
              <li onClick={handleLogout} className="profile-menu-item">
                Log out
              </li>
            </ul>
          </div>
        )}
        {isProfileMenuShown && props.loggedIn && (
          <div className="mobile-dropdown navbar-dropdown-menu">
            <ul className="navbar-dropdown-menu-items">
              <li className="profile-menu-item">Home</li>
              <li className="profile-menu-item">Search Recipes</li>
              <li className="profile-menu-subitem">By Meal</li>
              <li className="profile-menu-subitem">By Cuisine</li>
              <li className="profile-menu-subitem">{"<"} 30 Minutes</li>
              <li className="profile-menu-item">Profile</li>
              <li className="profile-menu-item">My Recipes</li>
              <li className="profile-menu-item">Saved Recipes</li>
              <li className="profile-menu-item">Add Recipe</li>
              <li className="profile-menu-item">Account</li>
              <li className="profile-menu-item">Help</li>
              <li onClick={handleLogout} className="profile-menu-item">
                Log out
              </li>
            </ul>
          </div>
        )}
        {/* </div> */}
      </nav>
      {/* // )} */}
    </div>
  );
}
