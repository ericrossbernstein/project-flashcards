import React, { useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api/index.js";

export const EditDeck = (props) => {
  const { deck, setDeck } = props;
  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);

    return () => abortController.abort();
  }, [deckId, setDeck]);

  const changeHandler = (event) => {
    setDeck({
      ...deck,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await updateDeck(deck);
    history.push(`/decks/${deckId}`);
  };

  return (
    <section>
      <div>
        <nav>
          <Link to="/">Home</Link>
          {" / "}
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          {" / "}
          <span>Edit Deck</span>
        </nav>
        <h2>Edit Deck</h2>
        <form onSubmit={submitHandler}>
          <fieldset>
            <div>
              <label htmlFor="name">Name :</label>
              <input
                id="name"
                name="name"
                type="text"
                required={true}
                value={deck.name}
                maxLength="100"
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="description">Description :</label>
              <textarea
                id="description"
                name="description"
                required={true}
                rows="3"
                maxLength="500"
                value={deck.description}
                onChange={changeHandler}
              />
            </div>
            <div className="group-row">
              <button
                className="item"
                onClick={() => history.push(`/decks/${deckId}`)}
              >
                Cancel
              </button>
              <button className="item" type="submit">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default EditDeck;
