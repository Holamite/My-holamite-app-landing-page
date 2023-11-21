import React from "react";
import { testimonial } from "../data";

const FindArtisan = () => {
  return (
    <section className="findArtisan-section">
      <div className="container">
        <h1 className="findArtisan-head">
          Find <span>Skilled Artisan</span>
        </h1>
        <p className="findArtisan-text">
          Connect with a diverse network of skilled artisans who can elevate
          your projects in your new environment. Start your search for the ideal
          creator today.
        </p>
      </div>
      <div className="findArtisan-container">
        {testimonial.map((data) => {
          const { id, img, name, role } = data;
          return (
            <div key={id} className="findArtisan-box">
              <div>
                <img src={img} alt={name} className="findArtisan-img" />
              </div>
              <div className="findArtisan-img-text">
                <p>{name}</p>
                <p>{role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FindArtisan;
