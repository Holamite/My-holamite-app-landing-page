import React, { useState } from "react";
import { testimonial } from "../data";

const Testimonial = () => {
  const [showImg, setShowImg] = useState(1);

  function toggleImg(index) {
    setShowImg(index);
  }

  return (
    <section className="testimonial-section">
      <div className="container">
        <div>
          <h4 className="testimonial-Head">
            <span>Testimonial</span> Session
          </h4>
          <p className="testimonial-text">
            See what our delighted clients have to say
          </p>
        </div>

        <div className="testimonial-box">
          {testimonial.map((test) => {
            const { id, text, img, role, name } = test;
            return (
              <div
                key={id}
                className={
                  showImg === id
                    ? " testimonial-content active-testimonial-content"
                    : "testimonial-content"
                }
              >
                <blockquote className="testimonial">"{text}"</blockquote>
                <div className="testimonial-user-box">
                  <img src={img} alt={name} className="testimonial-user-img" />
                  <div>
                    <h6 className="testimonial-user-name">{name}</h6>
                    <p className="testimonial-user-role">{role}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div>
            <div className="testimonial-img-box">
              {testimonial.map((test) => {
                const { id, img, name } = test;
                return (
                  <img
                    key={id}
                    onClick={() => toggleImg(id)}
                    className={
                      showImg === id
                        ? "testimonial-img active-testimonial-img "
                        : "testimonial-img"
                    }
                    src={img}
                    alt={name}
                  />
                );
              })}
              <div className="testimonial-img-num">+24</div>
            </div>
            <div className="testimonial-CTA">
              <p>
                Join our community of 400+
                <br /> artisan solving user needs
                <br /> through Holamite
              </p>
              <button className="btn">Join</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
