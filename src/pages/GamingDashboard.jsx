export default function GamingDashboard() {
  return (
    <div className="w-full min-h-screen bg-green-dark   text-white font-poppins p-6">
      <div className="flex gap-4 w-full">
        <div className="w-1/12 rounded-3xl bg-gradient-to-b from-teal-900 to-teal-950 min-h-screen p-4 flex flex-col justify-between">
          <div></div>
          <img src="/gImages/add.svg" alt="" />
        </div>
        <div className="w-10/12"></div>
        <div className="w-1/12 rounded-3xl min-h-screen"></div>
      </div>
    </div>
  );
}

// bg-[url('/gImages/background.svg')] bg-cover
