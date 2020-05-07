import React from "react";
import "bulma/css/bulma.css";
import "./formfield.css";

const Formfield = () => {
  return (
    <React.Fragment>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </React.Fragment>
  );
};

export default Formfield;
