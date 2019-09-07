import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/facebook-app-symbol.svg";
export default ({}) => (
  <div className="box">
    <span>
      {" "}
      <Link to="https://www.facebook.com" target="_blank">
        <img alt="FB" src={logo}>
          {/* {" "} */}
        </img>
        {/* Aqui se agrega el ícono  */}
      </Link>
    </span>
    <span>
      |
      <Link to="https://www.instagram.com" target="_blank">
        INST
      </Link>
    </span>
    <span>
      |
      <Link to="https://www.instagram.com" target="_blank">
        TW{" "}
      </Link>
    </span>
    <span>
      |
      <Link to="https://www.instagram.com" target="_blank">
        LINK{" "}
      </Link>
    </span>
  </div>
);
