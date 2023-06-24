function ProductBar() {
  // añadir un div con flex 1 con el logo y un separador en vertical.
  return (
    <div className="h-30 py-10 bg-brown">
      <ul className="flex flex-row justify-around text-letters text-md font-semibold">
        <li className="cursor-pointer w-20 text-center">Couples</li>
        <li className="cursor-pointer w-20 text-center">Engagements</li>
        <li className="cursor-pointer w-20 text-center">Weddings</li>
        <li className="cursor-pointer w-20 text-center">Families</li>
        <li className="cursor-pointer w-20 text-center">Planning</li>
      </ul>
    </div>
  );
}

export default ProductBar;
