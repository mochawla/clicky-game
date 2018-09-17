import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div ClassName = "container">
     <nav className="navbar-fluid fixed-top navbar-expand-lg navbar-dark">
     <h1 className = "title">
    {props.title}
    </h1>  
    <ul className="navbar-nav  justify-content-end">
     
      <li className="nav-item" id="score">Score</li>  &#160;&#160;|&#160;&#160;

     <li className="nav-item" id="top-score">Top Score</li>
    </ul>
     </nav>
    </div>
)

export default Navbar;