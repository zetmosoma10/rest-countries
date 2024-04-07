import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useLocation } from "react-router-dom";
import allCountries from "../data.json";
import { IoArrowBackOutline } from "react-icons/io5";

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState(null);
  const location = useLocation();
  console.log(location);
  const { country } = useParams();

  useEffect(() => {
    const currentCountry = allCountries.find(
      (countryDetail) => countryDetail.name === country
    );
    setCountryDetails(currentCountry);
  }, [country]);

  // const search = state?.search || "";
  const searchParams = location.state?.search || "";

  return (
    <section className=" bg-slate-50 min-h-screen py-10">
      <div className="max-container">
        <Link
          to={`..${searchParams}`}
          relative="path"
          className="flex items-center w-28 active:ring-2 active:ring-slate-300 border py-1 px-5 rounded-sm border-0 shadow-lg bg-white"
        >
          <span className="mr-1.5 ">
            <IoArrowBackOutline />
          </span>
          Back
        </Link>
      </div>
      <main className="max-container pt-10 flex justify-center lg:block ">
        {countryDetails ? (
          <div
            className=" grid lg:grid-cols-2 gap-y-10 
            gap-x-28 bg-transparent max-w-[550px] lg:max-w-full "
          >
            <img
              className=" rounded-lg w-full self-center"
              src={countryDetails.flag}
              alt={`flag of ${countryDetails.flag}`}
            />
            <div className="lg:py-8">
              <h3 className="font-extrabold text-[22px]">
                {countryDetails.nativeName}
              </h3>
              <div className="grid lg:grid-cols-2 mt-4 lg:mt-6 gap-y-8 gap-x-8">
                <div>
                  <p className="font-semibold text-sm leading-8">
                    <span>Native Name:</span>
                    {"  "}
                    <span className="font-light">
                      {countryDetails.nativeName}
                    </span>
                  </p>
                  <p className="font-semibold text-sm leading-8">
                    <span>Population:</span>
                    {"  "}
                    <span className="font-light">
                      {countryDetails.population}
                    </span>
                  </p>
                  <p className="font-semibold text-sm leading-8">
                    <span>Region:</span>
                    {"  "}
                    <span className="font-light">{countryDetails.region}</span>
                  </p>
                  <p className="font-semibold text-sm leading-8">
                    <span>Sub Region:</span>
                    {"  "}
                    <span className="font-light">
                      {countryDetails.subregion}
                    </span>
                  </p>
                  <p className="font-semibold text-sm leading-8">
                    <span>Capital:</span>
                    {"  "}
                    <span className="font-light">
                      {countryDetails.capital
                        ? countryDetails.capital
                        : "No Capital City"}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm leading-8">
                    <span>Top Level Domain:</span>
                    {"  "}
                    <span className="font-light">
                      {countryDetails.topLevelDomain
                        ? countryDetails.topLevelDomain[0]
                        : "Top Level Domain"}
                    </span>
                  </p>
                  <p className="font-semibold text-sm leading-8">
                    <span>Currencies:</span>
                    {"  "}
                    {countryDetails.currencies ? (
                      countryDetails.currencies.map((item) => (
                        <span key={item} className="font-light">
                          {item.name}
                          {", "}
                        </span>
                      ))
                    ) : (
                      <span className="font-light">No Currencies</span>
                    )}
                  </p>
                  <p className="font-semibold text-sm leading-8">
                    <span>Languages:</span>
                    {"  "}
                    {countryDetails.languages ? (
                      countryDetails.languages.map((item, index) => (
                        <span key={`${item} ${index}`} className="font-light">
                          {item.name}
                          {", "}
                        </span>
                      ))
                    ) : (
                      <span className="font-light">No Languages</span>
                    )}
                  </p>
                </div>
              </div>
              <p className="font-semibold text-sm leading-8 mt-8">
                <span>Border Countries:</span>
                <span className="flex flex-wrap">
                  {countryDetails.borders ? (
                    countryDetails.borders.map((item) => (
                      <span
                        key={item}
                        className="py-1 px-6 rounded-md font-light shadow-md m-1 border"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="font-light">No Border Countries</span>
                  )}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-4xl font-extrabold">Loading...</p>
        )}
      </main>
    </section>
  );
};

export default CountryDetails;
