/* eslint-disable react/prop-types */
export default function NumberCard({ color, title, amount, rise, percentage }) {
  return (
    <div
      className={`rounded-xl md:w-1/3 w-full shadow-main shadow-black ${color} text-black p-5 transition delay-100 hover:-skew-y-6`}
    >
      <div className="text-sm">{title}</div>
      <div className="relative w-full bg-white rounded-full h-1 my-3">
        <div
          className="bg-black h-full rounded-full"
          style={{ width: percentage }}
        ></div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl">{amount}</span>
        <img
          src="/images/up-arrow.svg"
          alt="Rise"
          className={`w-4 ${!rise && "rotate-90"}`}
        />
      </div>
    </div>
  );
}
