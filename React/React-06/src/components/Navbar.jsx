import React from "react";
import { Link, useMatch } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            React Router
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    useMatch({ path: "", end: true })
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={
                    useMatch({ path: "about", end: true })
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/users"
                  className={
                    useMatch({ path: "users", end: true })
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
