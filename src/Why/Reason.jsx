import React from "react";
import { reason } from "../data";

const Reason = () => {
  return (
    <section className="reason-section">
      <div className="container">
        <article className="reason-head marginBottom">
          <h1 className="reason-head-text marginBottom">
            why <span>Holamite</span>
          </h1>
          <p className="reason-text">
            where artisans and startups meet to collaborate, create, and
            innovate. We connect talented artisans with businesses to help you
            succeed in your new environment.
          </p>
        </article>
        <div className="reason-box">
          {reason.map((rea) => {
            const { id, subhead, content } = rea;
            return (
              <div key={id}>
                <h3 className="reason-box-head ">{subhead}</h3>
                <p className="reason-box-text">{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reason;
