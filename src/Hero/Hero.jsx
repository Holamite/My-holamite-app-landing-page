import React from "react";
import { hero } from "../data";
import InputLocation from "./InputLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import heroImg from "/Images/heroImg.svg";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <h1 className="hero-head ">{hero?.headline}</h1>
        <p className="hero-text marginBottom">{hero?.text}</p>
        <div className="hero-btn-container marginBottom">
          <button type="button" className="btn">
            Get Started
          </button>
          <a className="btn-login" href="http://" target="blank">
            <FontAwesomeIcon icon={faVideo} className="location-icon" /> Watch
            Demo
          </a>
        </div>
        <InputLocation />
      </div>
      <img className="img" src={heroImg} alt="IIllustrations of Artisans" />
    </section>
  );
};

export default Hero;
