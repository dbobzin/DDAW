import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

function One() {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <img
              src="./dirty-deeds-auto-wash.png"
              alt="Logo"
              width="100px"
              height="100px"
            />

            <a className="navbar-brand">Dirty Deeds Auto Wash</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">profile</a>
            </li>
            <li>
              <a href="#">plans</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default One;
