export default function AvailableBalances() {
  return (
    <div className="bg-gradient-to-r from-black to-zinc-700 w-full rounded-xl text-white shadow-main shadow-orange-500 flex flex-col items-center px-8 py-10 relative">
      <div className="text-sm">Available balances</div>
      <div className="text-4xl font-bold mt-3 mb-6">$ 116,900</div>
      <img src="/images/box.svg" alt="Available" className="w-4/5" />
      <img
        src="/images/waves.svg"
        alt="Wave"
        className="absolute top-0 left-5"
      />
    </div>
  );
}
