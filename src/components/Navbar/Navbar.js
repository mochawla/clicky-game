import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div ClassName = "container">
     <nav className="navbar-fluid fixed-top navbar-expand-lg navbar-dark">
     <h1 className = "title">
    {props.title}
    </h1>  
    <ul className="navbar-nav  justify-content-end text-uppercase">
    <li className="nav-item" id="rw">{props.rightWrong}</li>
    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
      <li className="nav-item" id="cur-sco">Current Score {props.score}</li>
      &#160;|&#160;
      <li className="nav-item" id="top-sco">Top Score {props.topScore}</li>
    </ul>
     </nav>
    </div>
)

export default Navbar;