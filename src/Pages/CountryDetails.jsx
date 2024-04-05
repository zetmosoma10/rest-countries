import { useEffect, useState } from "react";
import { useParams } from "react-router";

/*
  {
    "name": "Afghanistan",
    "topLevelDomain": [".af"],
    "alpha2Code": "AF",
    "alpha3Code": "AFG",
    "callingCodes": ["93"],
    "capital": "Kabul",
    "altSpellings": ["AF", "Afġānistān"],
    "subregion": "Southern Asia",
    "region": "Asia",
    "population": 40218234,
    "latlng": [33, 65],
    "demonym": "Afghan",
    "area": 652230,
    "timezones": ["UTC+04:30"],
    "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
    "nativeName": "افغانستان",
    "numericCode": "004",
    "flags": {
      "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
    },
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "؋"
      }
    ],
    "languages": [
      {
        "iso639_1": "ps",
        "iso639_2": "pus",
        "name": "Pashto",
        "nativeName": "پښتو"
      },
      {
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "nativeName": "Oʻzbek"
      },
      {
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "nativeName": "Türkmen"
      }
    ],
    "translations": {
      "br": "Afghanistan",
      "pt": "Afeganistão",
      "nl": "Afghanistan",
      "hr": "Afganistan",
      "fa": "افغانستان",
      "de": "Afghanistan",
      "es": "Afganistán",
      "fr": "Afghanistan",
      "ja": "アフガニスタン",
      "it": "Afghanistan",
      "hu": "Afganisztán"
    },
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    "regionalBlocs": [
      {
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation"
      }
    ],
    "cioc": "AFG",
    "independent": true
  },
  */

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState(null);

  console.log(countryDetails);
  const { country } = useParams();
  const ApiEndPoint = "https://restcountries.com/v3.1/name/" + country;

  useEffect(() => {
    async function getCountryName(ApiEndPoint) {
      try {
        const resp = await fetch(ApiEndPoint);
        if (!resp.ok) {
          throw new Error("Failed to Fetch Data");
        }
        const data = await resp.json();
        setCountryDetails(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getCountryName(ApiEndPoint);
  }, [country]);

  return (
    <section className=" bg-slate-50 min-h-screen">
      <main className="max-container">
        {countryDetails ? (
          <div>
            <div>
              <img
                src={countryDetails.flags.svg}
                alt={countryDetails.flags.alt}
              />
            </div>
            <div className="grid">
              <p>
                <span>Native Name:</span>
                <span>{countryDetails.name.official}</span>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-3xl font-extralight">Loading</p>
        )}
      </main>
    </section>
  );
};

export default CountryDetails;

// {/* <h3>{countryDetails.name.nativeName.eng.official}</h3> */}
//               <div className="grid">
//                 <div>
//                   <p>
//                     <span>Native Name:</span>
//                     <span>{countryDetails.name.nativeName.ara}</span>
//                   </p>
//                   <p>
//                     <span>Population:</span>
//                     <span>{countryDetails.population}</span>
//                   </p>
//                   <p>
//                     <span>Region:</span>
//                     <span>{countryDetails.region}</span>
//                   </p>
//                   <p>
//                     <span>Sub Region:</span>
//                     <span>{countryDetails.subregion}</span>
//                   </p>
//                   <p>
//                     <span>Capital:</span>
//                     {countryDetails.capital.map((item) => (
//                       <span>{item}</span>
//                     ))}
//                   </p>
//                 </div>
//                 <div>
//                   <p>
//                     <span>Top Level Domain:</span>
//                     <span>{countryDetails.tld}</span>
//                   </p>
//                   <p>
//                     <span>Currencies:</span>
//                     {/* <span>{}</span> */}
//                   </p>
//                   <p>
//                     <span>Languages:</span>
//                     <span>{countryDetails.languages}</span>
//                   </p>
//                 </div>
//               </div>
//               <p>Border Countries:</p>
//             </div>
//           </div>
