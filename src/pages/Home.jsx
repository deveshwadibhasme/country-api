import { useState } from 'react';
import CountryContainer from '/src/components/CountryContainer.jsx';
import SearchFilter from '/src/components/SearchFilter.jsx';

const Home = () => {
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('');
    return (
        <main>
            <SearchFilter setQuery={setQuery} setRegion={setRegion} />
            {/* <CountryContainer query={query} region={region} /> */}
        </main>
    )
}

export default Home
