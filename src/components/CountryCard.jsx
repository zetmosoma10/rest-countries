import { Link } from "react-router-dom";

const CountryCard = ({ items }) => {
  return (
    <div className="border grid grid-rows-[50%,50%] bg-white  shadow-sm hover:shadow-lg rounded-md overflow-hidden cursor-pointer">
      <Link to={items.name}>
        <div>
          <img className="" src={items.flag} alt="" />
        </div>
        <div className=" p-6">
          <h2 className="font-extrabold text-lg">{items.name}</h2>
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
      </Link>
    </div>
  );
};

export default CountryCard;
