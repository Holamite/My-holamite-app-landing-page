import React, { useState } from "react";
import Accordion from "./accordion";
import { accordionData } from "../data";

const FAQs = () => {
  const [isShown, setIsShown] = useState(0);

  return (
    <section className="FAQs-section">
      <div className="container">
        <h1 className="FAQs-head">
          <span>Frequently</span> Asked Question
        </h1>
        <p className="FAQs-text">
          Get your thought questions answered already!
        </p>
        <div className="FAQs-box">
          {accordionData.map((accordion) => {
            const isActive = accordion.id === isShown;
            return (
              <Accordion
                key={accordion.id}
                {...accordion}
                isActive={isActive}
                isShown={isShown}
                setIsShown={setIsShown}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
