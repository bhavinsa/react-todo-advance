import React, { Component } from "react";

import { Link } from "react-router-dom";
class Header extends Component {
  constructor() {
    super();
  }
  e = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
