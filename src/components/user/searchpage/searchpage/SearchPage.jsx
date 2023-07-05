import React from "react";
import SearchBar from "../searchbar/SearchBar";

import BookData from './Data.json'
const SearchPage = () =>{
    return (
        <div>
        <SearchBar placeholder="Enter a Book Name" data={BookData}/>
        </div>
    )
}

export default SearchPage;