const CountryCard = ({ items }) => {
  return (
    <div className="border grid grid-rows-[50%,50%] bg-white  shadow-sm hover:shadow-lg rounded-md overflow-hidden cursor-pointer">
      <img
        className="object-contain"
        src={items.flags.svg}
        alt={items.flags.alt}
      />
      <div className=" p-6">
        <h2 className="font-extrabold text-lg">{items.name.common}</h2>
        <div className="mt-4 text-sm leading-4 space-y-[8px] ">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">{items.population}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{items.region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{items.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
