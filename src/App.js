import React from "react";
import Nav from "./Nav/nav";
import Formfield from "./Formfield/formfield";

const App = () => {
  return (
    <>
      <Nav />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </>
  );
};

export default App;
