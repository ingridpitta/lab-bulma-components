import React from "react";
import "bulma/css/bulma.css";
import "./coolButton.styles.css";

const CoolButton = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};

export default CoolButton;
