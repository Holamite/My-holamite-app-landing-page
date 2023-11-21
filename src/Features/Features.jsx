import React from "react";
import { features } from "../data";

const Features = () => {
  return (
    <section>
      <div className="container features-section">
        <div>
          <h4 className="feature-head marginBottom">How it works</h4>
          <h2 className="feature-subhead ">
            Seamlessly Connect, Showcase Your Craft, and Transform Skills
            digitally
          </h2>
          <p className="feature-subhead-text marginBottom">
            HolamiteApp is your backstage pass to a world where your craft is
            celebrated, connections are made, and every project is a masterpiece
            in the making.
          </p>
        </div>
        <div>
          <div className="feature-content-box">
            <aside className="feature-content-text">
              <h2 className="feature-content-head marginBottom">
                {features?.[0]?.featureHead}
              </h2>
              <p className="feature-content-text">
                {features?.[0]?.featureContent}
              </p>
            </aside>
            <div className="feature-img">
              <img
                className="img "
                src={features?.[0]?.img}
                alt={features?.[0]?.featureHead}
              />
            </div>
          </div>
          <div className="feature-content-box">
            <div className="feature-img">
              <img
                className="img "
                src={features?.[1]?.img}
                alt={features?.[1]?.featureHead}
              />
            </div>
            <aside className="feature-content-text">
              <h2 className="feature-content-head marginBottom">
                {features?.[1]?.featureHead}
              </h2>
              <p className="feature-content-text">
                {features?.[1]?.featureContent}
              </p>
            </aside>
          </div>
          <div className="feature-content-box">
            <aside className="feature-content-text">
              <h2 className="feature-content-head marginBottom">
                {features?.[2]?.featureHead}
              </h2>
              <p className="feature-content-text">
                {features?.[2]?.featureContent}
              </p>
            </aside>
            <div className="feature-img">
              <img
                className="img "
                src={features?.[2]?.img}
                alt={features?.[2]?.featureHead}
              />
            </div>
          </div>
          <div className="feature-content-box">
            <div className="feature-img">
              <img
                className="img "
                src={features?.[3]?.img}
                alt={features?.[3]?.featureHead}
              />
            </div>
            <aside className="feature-content-text">
              <h2 className="feature-content-head marginBottom">
                {features?.[3]?.featureHead}
              </h2>
              <p className="feature-content-text">
                {features?.[3]?.featureContent}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
