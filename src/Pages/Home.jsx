import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import SearchInput from "../components/SearchInput";
import CustomDropdown from "../components/CustomDropdown";
import countriesData from "../data.json";

const Home = () => {
  const [allCountries, setAllCountries] = useState(countriesData);
  const [input, setInput] = useState("");

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  function getFilteredCountries() {
    const filterCountries = countriesData.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );

    setAllCountries(filterCountries);
  }

  useEffect(() => {
    if (input.trim().length !== 0) {
      getFilteredCountries();
    } else {
      setAllCountries(countriesData);
    }
  }, [input]);

  const renderCountries = allCountries.map((country) => (
    <CountryCard key={`${country.name} ${country.flag}`} items={country} />
  ));

  return (
    <section className=" bg-slate-50 min-h-screen">
      <main className=" max-container">
        <div
          className="flex flex-col md:flex-row items-start md:items-center 
          justify-between py-7 lg:py-12 gap-10"
        >
          <SearchInput handleSearchInput={handleSearchInput} input={input} />
          <CustomDropdown
            options={["Africa", "Europe", "Asia", " America", " Oceania"]}
          />
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
