import Loading from "../components/LoadingCountry.jsx";
import { Link, useParams } from "react-router";
import Error from "../components/Error.jsx";
import { useEffect, useState } from "react";

const Country = () => {
  const countryName = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName.country}`
      );
      const data = await response.json();
      setCountry({
        image: data[0].flags.svg,
        name: data[0].name.common,
        population: data[0].population.toLocaleString("en-IN"),
        region: data[0].region,
        subregion: data[0].subregion,
        capital: data[0].capital == null ? "None" : data[0].capital.join(", "),
        tld: data[0].tld.join(", "),
        currencies:
          data[0].currencies == null
            ? "None"
            : Object.values(data[0].currencies)[0].name,
        language:
          data[0].languages == null
            ? "None"
            : Object.values(data[0].languages).join(", "),
        borders: [],
      });

      data[0].borders
        .map((border) => {
          async function fetchBorder() {
            const response = await fetch(
              `https://restcountries.com/v3.1/alpha/${border}`
            );
            const data = await response.json();
            setCountry((preState) => {
              return {
                ...preState,
                borders: [...preState.borders, data[0].name.common],
              };
            });
          }
          fetchBorder();

        })
      }
    fetchCountry();
    return () => {
      // cleanup code here
    };
  }, [countryName]);

  return country === null ? (
    <Loading />
  ) : (
    <div className="max-w-6xl min-h-[470px] mx-auto flex items-center relative justify-center md:justify-normal flex-col md:flex-row mt-5">
      <button
        type="button"
        onClick={() => history.back()}
        className="absolute top-0 left-5 px-4 py-1 bg-slate-700 text-white"
      >
        &larr; Back
      </button>
      <div className="w-[40%] mx-auto md:mx-0">
        <img src={country.image} alt="" />
      </div>
      <div className="mx-auto md:ml-10  self-start mt-5 text-center md:text-left">
        <h1 className="text-5xl mb-6">
          <b>{country.name}</b>
        </h1>
        <h2>
          <b>Population:</b> {country.population}
        </h2>
        <h2>
          <b>Region</b>: {country.region}
        </h2>
        <h2>
          <b>Subregion</b>: {country.subregion}
        </h2>
        <h2>
          <b>Capital</b>: {country.capital}
        </h2>
        <h2>
          <b>Top Level Domain</b>: {country.tld}
        </h2>
        <h2>
          <b>Currencies</b>: {country.currencies}
        </h2>
        <h2>
          <b>Language</b>: {country.language}
        </h2>
        {country.borders.length !== 0 && (
          <div className="m-2">
            <h2>
              <b>Border Countries</b>
            </h2>
            <div className="flex flex-wrap gap-2 m-2">
              {country.borders.map((bord) => (
                <Link
                  className="shadow-sm shadow-black/60 p-2"
                  key={bord}
                  to={"/" + bord}
                >
                  {bord}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
