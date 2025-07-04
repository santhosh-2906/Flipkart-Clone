import React from "react";
import "../assets/css/Navbar.css";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Navbar() {
  const [{ basket }] = useStateValue();

  return (
    <div className="navbar">
      <p className="header__line"><DehazeOutlinedIcon /></p>
       <Link to="/" className="navbar__homeLink">
        <div className="navbar__option">
          <span>Home</span>
        </div>
       </Link>

      <div className="navbar__option"><span>Gift Cards</span></div>
      <div className="navbar__option"><span>Best Sellers</span></div>
      <div className="navbar__option"><span>Mobiles</span></div>
      <div className="navbar__option"><span>Today's Deals</span></div>
      <div className="navbar__option"><span>Prime</span></div>
      <div className="navbar__option"><span>New Releases</span></div>
      <div className="navbar__option"><span>Computers</span></div>
      <div className="navbar__option"><span>Flipkart Plus</span></div>

      {/* 🛒 Cart Icon */}
      <Link to="/checkout" className="navbar__cartLink">
        <div className="navbar__cart">
          <ShoppingCartIcon />
          <span className="navbar__cartCount">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
