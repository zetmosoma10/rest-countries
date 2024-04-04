import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const ApiEndPoint = "https://restcountries.com/v3.1/all";

  console.log("Home Rendered");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const cachedData = localStorage.getItem("cachedData");
        if (cachedData) {
          // Get Data from LocalStorage If it Exist
          setAllCountries(JSON.parse(cachedData));
          setLoading(false);
        } else {
          // Fetch data from API
          const resp = await fetch(ApiEndPoint);
          if (!resp.ok) {
            throw new Error("Failed to Fetch Data");
          }
          const data = await resp.json();
          setLoading(false);
          setAllCountries(data);
          // Save data to localStorage
          localStorage.setItem("cachedData", JSON.stringify(data));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const renderCountries =
    allCountries.length > 0 &&
    allCountries.map((country) => (
      <CountryCard
        key={`${country.name} ${country.flags.svg}`}
        items={country}
      />
    ));

  return (
    <section className=" bg-slate-50 min-h-screen">
      <main className="max-container">
        <div
          className="pt-7 md:pt-12 grid grid-cols-auto-cols gap-y-10 
            md:gap-y-[75px] gap-x-10 "
        >
          {loading ? (
            <p className="text-3xl font-medium">Loading...</p>
          ) : (
            renderCountries
          )}
        </div>
      </main>
    </section>
  );
};

export default Home;
