import React from "react";
import "./signup.styles.css";

import Nav from "../../Nav/nav";
import Formfield from "../../Formfield/formfield";
import CoolButton from "../../CoolButton/CoolButton";

const Signup = () => {
  return (
    <div className="signup">
      <Nav />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <Formfield
        label="Password"
        type="password"
        placeholder="Digite sua senha"
      />
      <CoolButton className="button is-primary" text="Sign up" />
    </div>
  );
};
export default Signup;
