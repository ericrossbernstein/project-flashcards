import React from "react";
import { useHistory } from "react-router-dom";

export const DeckSnapshot = ({
  deckId,
  name,
  description,
  amount,
  deleteHandler,
}) => {
  const history = useHistory();

  return (
    <div className="card">
      <div className="item">
        <div className="group-row">
          <div className="item">
            <h3>{name}</h3>
            <hr></hr>
          </div>
          <div className="circle">
            <h6>{amount} cards</h6>
          </div>
        </div>
        <p>{description}</p>
      </div>
      <div className="footer">
        <button
          className="item"
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          View
        </button>
        <button
          className="item"
          onClick={() => history.push(`/decks/${deckId}/study`)}
        >
          Study
        </button>
        <button className="item" onClick={() => deleteHandler(deckId)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeckSnapshot;
