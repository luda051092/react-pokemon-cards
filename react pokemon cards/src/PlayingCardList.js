import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. Can also remove all cards */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  return (
    <div className="PlayingCardList">
      <h3>Pick a card.</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a card.</button>
        <button onClick={clearCards}>Clear the cards.</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />

        ))}
      </div>
    </div>
  );

 
}

CardTable.defaultProps = {};

export default CardTable;
