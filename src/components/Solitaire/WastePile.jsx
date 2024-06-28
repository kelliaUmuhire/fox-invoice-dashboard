/* eslint-disable react/prop-types */
import Card from "./Card";

const WastePile = ({ waste, onClick }) => {
  //todo: can only drag top card
  return (
    <div className="w-24 h-36 bg-emerald-800 border-2 border-emerald-500 rounded-lg flex items-center justify-center relative">
      {waste.length > 0 &&
        waste.map((card, index) => (
          <div
            key={index}
            className="absolute"
            style={{ left: index * 20 + "px" }}
          >
            <Card
              card={{ ...card, isFaceUp: true }}
              onClick={onClick}
              lastIndex={waste.length - index}
            />
          </div>
        ))}
    </div>
  );
};

export default WastePile;
