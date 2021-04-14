import React from "react";

export const CardForm = (props) => {
  const {
    history,
    isNewCard,
    card,
    deckId,
    changeHandler,
    submitHandler,
  } = props;
  return (
    <form onSubmit={submitHandler}>
      <fieldset>
        <div>
          <label htmlFor="front">Front :</label>
          <textarea
            id="front"
            name="front"
            required={true}
            rows="3"
            maxLength="300"
            value={card.front}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="back">Back :</label>
          <textarea
            id="back"
            name="back"
            required={true}
            rows="3"
            maxLength="300"
            value={card.back}
            onChange={changeHandler}
          />
        </div>
        <div className="group-row">
          <button
            className="item"
            onClick={() => history.push(`/decks/${deckId}`)}
          >
            {isNewCard ? "Done" : "Cancel"}
          </button>
          <button className="item" type="submit">
            {isNewCard ? "Save" : "Submit"}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default CardForm;
