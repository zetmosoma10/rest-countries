import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import SearchInput from "../components/SearchInput";
import CustomDropdown from "../components/CustomDropdown";
import countriesData from "../data.json";
import CountryCardSkeleton from "../skeletons/CountryCardSkeleton";

const Home = () => {
  const [allCountries, setAllCountries] = useState(countriesData);
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const continent = searchParams.get("continent");
  const [loading, setLoading] = useState(true);

  const handleSearchInput = (e) => {
    setInput(e.target.value);
  };

  function getFilteredCountries() {
    const filterCountries = countriesData.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );

    setAllCountries(filterCountries);
  }

  function getFilteredContinent() {
    const filterContinent = countriesData.filter((country) =>
      country.region.toLowerCase().includes(continent)
    );
    setAllCountries(filterContinent);
  }

  // Select option Effect
  useEffect(() => {
    if (!continent) {
      setAllCountries(countriesData);
    } else {
      getFilteredContinent();
    }
  }, [continent]);

  // SearchInput Effect
  useEffect(() => {
    if (input.trim().length !== 0) {
      getFilteredCountries();
      setSearchParams({});
    } else {
      setAllCountries(countriesData);
    }
  }, [input]);

  useEffect(() => {
    setLoading(true); // Reset loading state when allCountries change
    const images = allCountries.map((item) => new Image());
    const promises = images.map(
      (img, index) =>
        new Promise((resolve) => {
          img.onload = () => resolve();
          img.src = allCountries[index].flag;
        })
    );
    Promise.all(promises).then(() => setLoading(false)); // Set loading to false when all images are loaded
  }, [allCountries]);

  const renderCountries = allCountries.map((country) => (
    <CountryCard
      searchParams={searchParams}
      key={`${country.name} ${country.flag}`}
      items={country}
    />
  ));

  return (
    <section
      className={`bg-slate-50 dark:bg-Very_Dark_Blue_Dark_Mode_Background min-h-screen`}
    >
      <main className=" max-container">
        <div
          className="flex flex-col md:flex-row items-start md:items-center 
          justify-between py-7 lg:py-12 gap-10"
        >
          <SearchInput handleSearchInput={handleSearchInput} input={input} />
          <CustomDropdown
            setSearchParams={setSearchParams}
            options={[
              "Filter by Region",
              "africa",
              "europe",
              "asia",
              "america",
              "oceania",
            ]}
          />
        </div>
        <div
          className="pb-7 md:pb-12 grid grid-cols-auto-cols gap-y-10 
            md:gap-y-[75px] gap-x-10 "
        >
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <CountryCardSkeleton />)
            : renderCountries}
        </div>
      </main>
    </section>
  );
};

export default Home;
