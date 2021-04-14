import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api/index.js";

export const CardList = ({ cards, deckId, refreshDeck }) => {
  const history = useHistory();

  const cardDeleteHandler = async (cardId) => {
    const result = window.confirm(
      "Delete this card? You will not be able to recover it."
    );
    if (result) {
      await deleteCard(cardId);
      await refreshDeck();
      history.push(`/decks/${deckId}`);
    }
  };

  return (
    <div className="group">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="item">
            <h5>Front :</h5>
            <p>{card.front}</p>
            <hr></hr>
          </div>
          <div className="item">
            <h5>Back :</h5>
            <p>{card.back}</p>
            <hr></hr>
          </div>
          <div className="footer">
            <button
              className="item"
              onClick={() =>
                history.push(`/decks/${deckId}/cards/${card.id}/edit`)
              }
            >
              Edit
            </button>
            <button className="item" onClick={() => cardDeleteHandler(card.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
