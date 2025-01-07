import React from 'react'
import { Link } from 'react-router';

const CountryCard = (props) => {
    const { name, flag, population, region, capital } = props;
    return (
        <Link to={'/'+ name} className='flex flex-col max-w-[250px] min-h-[250px] md:min-h-[290px] rounded-[10px] border-2 border-[var(--border-color)] overflow-hidden mx-[auto] my-[0] h-full w-full'>
            <div className='max-h-40 h-full w-full'>  
                <img src={flag} className='h-full w-full object-cover' alt='afghanistan-flag'/>
            </div>
            <div className='h-24 w-full' title='Afghanistan'>
                <h2 className='text-lg md:text-xl px-2'>{name}</h2>
                <div className='p-2 text-xs md:text-sm'>
                    <h5 className='population'>Population: <span className='value'>{population}</span></h5>
                    <h5 className='region'>Region: <span className='value'>{region}</span></h5>
                    <h5 className='capital'>Capital: <span className='value'>{capital}</span></h5>
                </div>   
            </div>
        </Link>
    )
}

export default CountryCard