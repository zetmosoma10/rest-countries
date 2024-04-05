import { useState } from "react";
import CountryCard from "../components/CountryCard";
import countriesData from "../data.json";

const Home = () => {
  const [allCountries, setAllCountries] = useState(countriesData);

  const renderCountries = allCountries.map((country) => (
    <CountryCard key={`${country.name} ${country.flag}`} items={country} />
  ));

  return (
    <section className=" bg-slate-50 min-h-screen">
      <main className="max-container">
        <div
          className="pt-7 md:pt-12 grid grid-cols-auto-cols gap-y-10 
            md:gap-y-[75px] gap-x-10 "
        >
          {renderCountries}
        </div>
      </main>
    </section>
  );
};

export default Home;
