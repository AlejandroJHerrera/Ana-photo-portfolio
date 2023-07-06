function ProductBar() {
  // añadir un div con flex 1 con el logo y un separador en vertical.
  return (
    <div className="h-20 py-6 bg-brown flex justify-around">
      <div className="pl-24">
        <h1>LOGO</h1>
      </div>
      <div className="flex-1">
        <ul className="flex flex-row justify-evenly text-letters text-md font-semibold">
          <li className="cursor-pointer w-20 text-center">Couples</li>
          <li className="cursor-pointer w-20 text-center">Engagements</li>
          <li className="cursor-pointer w-20 text-center">Weddings</li>
          <li className="cursor-pointer w-20 text-center">Families</li>
          <li className="cursor-pointer w-20 text-center">Planning</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductBar;
