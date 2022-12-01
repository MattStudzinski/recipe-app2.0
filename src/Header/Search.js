import React from 'react';
import './search.css'

const Search = () => {
    return (
        <div className='search'>
            <img className='search-icon' src='/Searchicon.svg' alt='search icon'/>
            <input className='search-input' placeholder='Search recipe'></input>
        </div>
    );
};

export default Search;