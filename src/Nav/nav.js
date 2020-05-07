import React from "react";
import CoolButton from "../CoolButton/CoolButton";
import "bulma/css/bulma.css";
import "./navbar.styles.css";

const Nav = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <CoolButton className="button is-link" text="Log in" />
              <CoolButton className="button is-primary" text="Sign up" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
