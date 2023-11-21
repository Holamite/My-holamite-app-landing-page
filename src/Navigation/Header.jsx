import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Toggle from "./Toggle";
import logo from "/Images/holamite-logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [navLinks, setNavLinks] = useState(false);

  const containLinkRef = useRef(null);
  const linkItemsRef = useRef(null);

  function handleLink() {
    setNavLinks((prev) => !prev);
  }

  const stylesLink = {
    height: navLinks
      ? `${linkItemsRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <header className="header">
      <div className="nav-header">
        <img src={logo} alt="logo" className="logos" />
        <button onClick={handleLink} className="btn-hamburger">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <Navbar
        linkItemsRef={linkItemsRef}
        containLinkRef={containLinkRef}
        stylesLink={stylesLink}
      />

      <div className="login-box">
        <a className="btn-login" href="http://" target="blank">
          Log in
        </a>
        <button type="button" className="btn">
          Get Started
        </button>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
