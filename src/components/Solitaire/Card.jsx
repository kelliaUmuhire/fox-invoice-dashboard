/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

const Card = ({ card, onClick, styles, lastIndex }) => {
  const [{ isDragging }, dragRef, preview] = useDrag({
    type: "CARD",
    item: { card },
    canDrag: () =>
      card.isFaceUp && (card.pile == "waste" ? lastIndex == 1 : true),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);
  return (
    <div
      ref={dragRef}
      className={`${styles} h-36 w-24 bg-white border-2 rounded-lg flex items-center justify-center cursor-pointer ${
        isDragging && "opacity-0"
      }`}
      onClick={() => onClick(card)}
    >
      {card.isFaceUp ? (
        <img
          src={`/cards/${card.rank}_of_${card.suit}.svg`}
          alt={`${card.rank} of ${card.suit}`}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <img
          src="/cards/card-back.svg"
          alt="Card Back"
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    </div>
  );
};

export default Card;
