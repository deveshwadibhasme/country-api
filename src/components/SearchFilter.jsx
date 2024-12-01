const SearchFilter = ({ setQuery, setRegion }) => {
    return (
        <div className="flex items-center justify-between w-full px-2 md:px-20 min-h-16 gap-5 m-2">
            <div className="flex items-center shadow-sm shadow-slate-400 px-2">
                <i className="fas fa-magnifying-glass"></i>
                <input onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} type="text" className="max-w-xs w-full p-3 outline-none text-sm" placeholder="Search for a country..." />
            </div>
            <select onChange={(e) => {
                setRegion(e.target.value)
            }} name="region" className="max-w-44 min-h-8 p-3 bg-slate-50 outline-none">
                <option value="">Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="america">America</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default SearchFilter