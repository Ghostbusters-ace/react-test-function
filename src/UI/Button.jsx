import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, children }) => {
  return (
    <button>
      {children}
      {/* <Link to={path}></Link> */}
    </button>
  );
};

export default Button;
