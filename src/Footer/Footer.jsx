import React from "react";
import logo from "/Images/holamite-logo.png";
import { links, socials } from "../data";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div>
          <h4 className="footer-head">
            Learn how to find ‘<span>Artisans</span>’
          </h4>
          <p className="footer-text">You can thank us later!</p>
          <button className="footer-btn">Start Booking</button>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" className="logos" />
          <ul className="footer-link">
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
        </div>
        <div className="footer-social-box">
          <p>{`© Copyright • ${new Date().getFullYear()} Holamite`}</p>
          <div>
            <a href="#">
              <img src={socials.twitter} alt="twitterX" />
            </a>
            <a href="#">
              <img src={socials.instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={socials.linkedin} alt="linkedin" />
            </a>
            <a href="#">
              <img src={socials.facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
