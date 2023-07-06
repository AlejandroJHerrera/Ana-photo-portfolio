function Header() {
  //Añadir responsiveness
  return (
    <div className="relative w-full">
      <img
        src="./WhatsApp Image 2023-06-17 at 11.37.39 AM (1).jpeg"
        alt="header"
        className="object-contain w-[1100px] h-[680px]"
      />
      <div className="absolute w-56 top-56 left-32 ">
        <h1 className="text-slate-200 font-bold text-2xl text-opacity-100">
          DO IT FOR THE 'GRAM? NAHH! I'M JUST KIDDING.
        </h1>
        <p className="text-slate-200 text-sm italic mt-5">
          THE PRETTIEST PHOTOS IN PRETTY PLACES OF BEAUTIFUL PEOPLE. LET'S GO ON
          AN AVENTURE AND CAPTURE THOSE MEMORIES
        </p>
        <div className="mt-5">
          <button className="bg-buttons text-slate-200 italic p-2 rounded-md ml-4">
            Book with me!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
