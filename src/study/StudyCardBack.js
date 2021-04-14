import React from "react";

export const StudyCardBack = ({ currentCard, flipCard, nextCard }) => {
  return (
    <div>
      <div>
        <h5>Back:</h5>
        <p>{currentCard.back}</p>
      </div>
      <div className="group-row">
        <button className="item" onClick={() => flipCard()}>
          Flip
        </button>
        <button className="item" onClick={() => nextCard()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudyCardBack;
