import React from "react";
import NavLinks from "./NavLinks";

const Navbar = ({ containLinkRef, linkItemsRef, stylesLink }) => {
  return (
    <div
      ref={containLinkRef}
      style={stylesLink}
      className="container-item-link"
    >
      <NavLinks linkItemsRef={linkItemsRef} />
    </div>
  );
};

export default Navbar;
