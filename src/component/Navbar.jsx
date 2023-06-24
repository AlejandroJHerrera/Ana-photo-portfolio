function Navbar() {
  return (
    <nav className="h-30 py-10 bg-brown">
      <ul className="flex flex-row justify-around text-letters text-md font-semibold">
        <li className="cursor-pointer w-20 text-center">About</li>
        <li className="cursor-pointer w-20 text-center">Experience</li>
        <li className="cursor-pointer w-20 text-center">Pricing</li>
        <li className="cursor-pointer w-20 text-center">Portfolio</li>
        <li className="cursor-pointer w-20 text-center">Blog</li>
        <li className="cursor-pointer w-20 text-center">Book Me</li>
      </ul>
    </nav>
  );
}

export default Navbar;
