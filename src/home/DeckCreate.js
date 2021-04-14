import React, { useState } from "react";
import { createDeck } from "../utils/api/index.js";
import { useHistory, Link } from "react-router-dom";

export const DeckCreate = () => {
  const initialDeckState = {
    name: "",
    description: "",
  };
  const [deck, setDeck] = useState({ ...initialDeckState });
  const history = useHistory();

  const changeHandler = (event) => {
    setDeck({
      ...deck,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await createDeck(deck);

    // TODO: send user to Deck screen
    history.push("/");
  };

  return (
    <section>
      <nav>
        <Link to="/">Home</Link>
        {" / "}
        <span>Create Deck</span>
      </nav>
      <h3>Create Deck</h3>
      <form onSubmit={submitHandler}>
        <fieldset>
          <div>
            <label htmlFor="name">Name:</label>
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
            <label htmlFor="description">Description:</label>
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
            <button className="item" onClick={() => history.push("/")}>
              Cancel
            </button>
            <button className="item" type="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default DeckCreate;
