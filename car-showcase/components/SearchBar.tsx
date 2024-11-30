"use client";

import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';
import React from 'react';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = () => {

    }
  return (
    <div>
      <form className='searchbar' 
      onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer>
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            </SearchManufacturer>

            
        </div>
      </form>
    </div>
  )
}

export default SearchBar
