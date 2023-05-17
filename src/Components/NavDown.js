import React from "react";
import "./NavDown.css";
import navImage from "../images/logo-image comp.png";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function NavDown() {
  return (
    <div className="navDown">
      <div className="leftPart">
        <img src={navImage} alt="" />
      </div>
      <div className="middlePart">
        <ul>
          <li>
            <a href="#" />
            Brands
          </li>
          <li>
            <a href="#" />
            Women
          </li>
          <li>
            <a href="#" />
            Men
          </li>
          <li>
            <a href="#" />
            Sale
          </li>
        </ul>
      </div>

      <div className="rightPart"></div>
    </div>
  );
}

export default NavDown;
