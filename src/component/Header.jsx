function Header() {
  return (
    <div className="relative ">
      <img
        src="./WhatsApp Image 2023-06-17 at 11.37.39 AM (1).jpeg"
        alt="header-photo"
        className="object-contain h-full "
      />
      <div className="absolute w-48 top-56 left-20 ">
        <h1 className="text-slate-200 font-bold text-2xl text-opacity-100">
          DO IT FOR THE 'GRAM? NAHH! I'M JUST KIDDING.
        </h1>
        <p className="text-slate-200 text-sm italic mt-5">
          THE PRETTIEST PHOTOS IN PRETTY PLACES OF BEAUTIFUL PEOPLE. LET'S GO ON
          AN AVENTURE AND CAPTURE THOSE MEMORIES
        </p>
      </div>
    </div>
  );
}

export default Header;
