import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import Loading from "./CountryLoading.jsx";

const CountryContainer = ({ query, region }) => {
  const [CountryData, setCountryData] = useState(null);
  const [regionData, setRegionData] = useState([]);

  useEffect(() => {
    async function fetchAllCountry() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    }

    fetchAllCountry();
  }, []);

  useEffect(() => {
    if (region && region.trim() !== "") {
      fetch("https://restcountries.com/v3.1/region/" + region)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          } else {
            return response.json();
          }
        })
        .then((data) => setRegionData(data))
        .catch((error) => console.error("Error fetching region data:", error));
    } else {
      console.log("Please enter a valid region.");
      setRegionData([]);
      return () => {
        // cleanup code here
      };
    }
  }, [region]);

  function checkEmpty() {
    return regionData.length === 0 ? true : false;
  }

  return CountryData === null ? (
    <Loading />
  ) : (
    <div className="grid grid-cols-[repeat(2,180px)] md:grid-cols-[repeat(4,280px)] mx-[auto] my-[0] max-w-[1160px] justify-center w-full gap-[10px]">
      {checkEmpty()
        ? CountryData.filter((eve) =>
            eve.name.common.toLowerCase().includes(query)
          ).map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital}
              />
            );
          })
        : regionData
            .filter((eve) => eve.name.common.toLowerCase().includes(query))
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population.toLocaleString("en-IN")}
                  region={country.region}
                  capital={country.capital}
                />
              );
            })}
    </div>
  );
};

export default CountryContainer;


