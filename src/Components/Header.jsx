import React, { useState, useEffect } from "react";
import "../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  // Sticky Navbar on Scroll (UPDATED WAY)
  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      setNav(scrollValue > 100);
    };

    window.addEventListener("scroll", changeValueOnScroll);

    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  return (
    <header className={nav ? "sticky" : ""}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <Link className="navbar-brand logo" to="/">
            <img src={Logo} alt="logo"  />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Menu">Our Menu</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Shop">Shop</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Blog">Blog</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>

              <li className="nav-item">
                <span className="cart ms-3">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </span>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
