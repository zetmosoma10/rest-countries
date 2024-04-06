import { useState } from "react";
import CountryCard from "../components/CountryCard";
import countriesData from "../data.json";
import { IoIosSearch } from "react-icons/io";

const Home = () => {
  const [allCountries, setAllCountries] = useState(countriesData);
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const renderCountries = allCountries.map((country) => (
    <CountryCard key={`${country.name} ${country.flag}`} items={country} />
  ));

  return (
    <section className=" bg-slate-50 min-h-screen">
      <main className=" max-container">
        <div className="py-7 lg:py-12 ">
          <div
            className={`bg-white rounded overflow-hidden 
            ${
              inputFocused ? "ring-2 ring-slate-300 " : ""
            }  flex items-center shadow-lg`}
          >
            <span className="text-lg opacity-50 ml-8">
              <IoIosSearch />
            </span>
            <input
              className="w-full font-Nunito indent-6  text-[12px] 
                md:text-sm py-4 outline-none focus:"
              type="text"
              placeholder="Search for a country…"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
        </div>
        <div
          className="pb-7 md:pb-12 grid grid-cols-auto-cols gap-y-10 
            md:gap-y-[75px] gap-x-10 "
        >
          {renderCountries}
        </div>
      </main>
    </section>
  );
};

export default Home;
