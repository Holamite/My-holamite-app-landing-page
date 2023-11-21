import React from "react";
import { links } from "../data";

const NavLinks = ({ linkItemsRef }) => {
  return (
    <ul className="nav-link" ref={linkItemsRef}>
      {links.map((link) => {
        const { text, id, url } = link;
        return (
          <li key={id}>
            <a href={url} target="_blank">
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
