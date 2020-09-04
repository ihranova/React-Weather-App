import React, {useState} from 'react'
import {MdGpsFixed} from 'react-icons/md';
import {BiSearch} from 'react-icons/bi';

const SearchBar = ({findCoordinates,searchCallback,error}) =>{
    const [searchTerm,setSearchTerm] = useState('');
    const doChangeInput = (e) =>{
        const {value} = e.target;
        setSearchTerm(value);
    } 
    const doSearch = () =>{
        searchCallback(searchTerm);
        setSearchTerm("");
    }
    return(
        <div className = "search_bar">
            <div className = "search_content">
                <div className = "search-color"><BiSearch /></div>
                <div className = "search__box">
                    <input type = "text"
                    placeholder = "Search for places ..." 
                    onChange = {doChangeInput}
                    onKeyPress={e =>  e.key === 'Enter' && doSearch() }
                    value={searchTerm} />
                </div>
                <div className = "gray-border" onClick = {findCoordinates}><MdGpsFixed /></div>
            </div>
            {error && (<div className = "error">Please type correct!</div>)}  
        </div>);

};
export default SearchBar;