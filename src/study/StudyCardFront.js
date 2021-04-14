import React from "react";

export const StudyCardFront = ({ currentCard, flipCard }) => {
  return (
    <div>
      <div>
        <h5>Front:</h5>
        <p>{currentCard.front}</p>
      </div>
      <button className="button-flip" onClick={() => flipCard()}>
        Flip
      </button>
    </div>
  );
};

export default StudyCardFront;
