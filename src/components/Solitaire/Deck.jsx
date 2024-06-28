/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Card from "./Card";
import { createDeck, shuffleDeck } from "./config";

const Deck = () => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const newDeck = shuffleDeck(createDeck());
    setDeck(newDeck.map((x) => ({ ...x, isFaceUp: true })));
  }, []);

  const handleCardClick = (card) => {
    // Implement card click logic here
  };

  return (
    <div className="flex flex-wrap">
      {deck.map((card, index) => (
        <Card key={index} card={card} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default Deck;
