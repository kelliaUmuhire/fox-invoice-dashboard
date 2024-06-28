/* eslint-disable react/prop-types */
export default function Topbar({ displaySidebar }) {
  return (
    <div className="flex md:items-start items-center lg:justify-normal justify-between">
      <div
        className="border-1.5 bg-white border-black shadow-main shadow-black rounded-md p-2.5 cursor-pointer mr-4 lg:hidden"
        onClick={displaySidebar}
      >
        <img src="/images/menu.svg" alt="menu" className="w-4" />
      </div>
      <div className="font-bold text-xl w-2/5 md:block hidden">Overview</div>
      <div className="flex gap-3 md:w-3/5 w-11/12 justify-end items-center">
        <div className="relative min-w-[50%] border-1.5 border-black shadow-main shadow-black rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="text-xs pl-8 pr-4 py-2 w-full focus:outline-none bg-transparent"
          />
          <img
            src="/images/search.svg"
            alt="Search"
            className="w-5 absolute top-1 left-1"
          />
        </div>
        <div className="border-1.5 border-black shadow-main shadow-black rounded-md p-1.5">
          <img src="/images/message.svg" alt="Message" className="w-5" />
        </div>
        <div className="border-1.5 border-black shadow-main shadow-black rounded-md p-1.5">
          <img
            src="/images/notification.svg"
            alt="Notification"
            className="w-5"
          />
        </div>
        <div className="border-1.5 border-black shadow-main shadow-black rounded-md w-10 h-10 bg-cover bg-center bg-no-repeat bg-[url('https://pbs.twimg.com/profile_images/1686798840903671808/-mxu6r7-_400x400.jpg')]"></div>
      </div>
    </div>
  );
}
