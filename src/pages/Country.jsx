import { useEffect, useState } from "react";
import Loading from "/components/LoadingCountry.jsx";
import { useParams } from "react-router";
import Error from '../components/Error.jsx'

const Country = () => {
  const countryName = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName.country}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]
        ).catch(()=>{<Error/>})
      }, [])

    return () => {
      // cleanup code here
    }
  }, [])

  return (
    country === null ? <Loading/>
   : (
   
   <div className='max-w-6xl min-h-[470px] mx-auto flex items-center relative justify-center md:justify-normal flex-col md:flex-row mt-5'>
    <button type="button" onClick={()=>history.back()} className="absolute top-0 left-5 px-4 py-1 bg-slate-700 text-white">&larr; Back</button>
      <div className="w-[40%] mx-auto md:mx-0">
        <img src={country.flags.svg} alt="" />  
      </div>
      <div className="mx-auto md:ml-10  self-start mt-5 text-center md:text-left">
        <h1 className="text-5xl mb-6"><b>{country.name.common}</b></h1>
        <h2><b>Population:</b> {country.population.toLocaleString('en-IN')}</h2>
        <h2><b>Region</b>: {country.region}</h2>
        <h2><b>Subregion</b>: {country.subregion}</h2>
        <h2><b>Capital</b>: {country.capital==null ? 'None' : (country.capital).join(', ')}</h2>
        <h2><b>Top Level Domain</b>: {(country.tld).join(', ')}</h2>
        <h2><b>Currencies</b>: {country.currencies == null ? 'None' : (Object.values(country.currencies)[0].name)}</h2>
        <h2><b>Language</b>: {country.languages == null ? 'None' : (Object.values(country.languages).join(', '))}</h2>
      </div>
    </div>)
  )
}

export default Country