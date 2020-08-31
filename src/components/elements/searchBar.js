import React from 'react'
import {MdGpsFixed} from 'react-icons/md';
import {BiSearch} from 'react-icons/bi';

const SearchBar = () =>(
    <div class = "search_bar">
        <div class = "search_content">
            <BiSearch />
            <div class = "search__box">
                <input type = "text"
                placeholder = "Search for places ..." />
            </div>
            <div class = "gray-border"> <MdGpsFixed /></div>
        
        </div>
    </div>
);
export default SearchBar;