import React from "react";

const Accordion = ({
  id,
  question,
  answer,
  isActive,
  isShown,
  setIsShown,
  handleToggle,
}) => {
  function handleToggle(index) {
    const nextIndex = isActive ? 0 : index;
    setIsShown(nextIndex);
  }
  return (
    <div key={id}>
      <div className="FAQs-question-box">
        <p onClick={() => handleToggle(id)} className="FAQs-question">
          {question}
        </p>
        <button onClick={() => handleToggle(id)} type="button">
          {isActive ? "-" : "+"}
        </button>

        <p
          className={
            isActive ? "FAQs-answer FAQs-answer-active" : "FAQs-answer"
          }
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;

// const [isShown, setIsShown] = useState(0);

// function handleToggle(index) {
//   const nextIndex = isActive ? null : index;
//   setIsShown(nextIndex);
// }

// return (
//   <div className="FAQs-box">
//     {accordionData.map((accordion) => {
//       const { id, question, answer } = accordion;
//       const isActive = id === isShown;
//       return (
//         <div key={id}>
//           <div className="FAQs-question-box">
//             <p className="FAQs-question">{question}</p>
//             <button onClick={() => handleToggle(id)} type="button">
//               {isActive ? "-" : "+"}
//             </button>

//             <p
//               className={
//                 isActive ? "FAQs-answer FAQs-answer-active" : "FAQs-answer"
//               }
//             >
//               {answer}
//             </p>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// );
