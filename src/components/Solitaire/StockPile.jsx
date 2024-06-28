/* eslint-disable react/prop-types */

const StockPile = ({ stock, onClick }) => {
  return (
    <div
      className="w-24 h-36 bg-emerald-800 border-none flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      {stock.length > 0 ? (
        <img
          src="/cards/card-back.svg"
          alt="Card Back"
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <div className="rounded-full border-[7px] border-emerald-400 p-5 opacity-70"></div>
      )}
    </div>
  );
};

export default StockPile;
