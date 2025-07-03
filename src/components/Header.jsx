import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Flipkart</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
    </header>
  );
}
