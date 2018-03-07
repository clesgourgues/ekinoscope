import React from "react";
import FaSearch from 'react-icons/lib/fa/search'

const SearchButton = ({ searchTerm, onSubmit }) => (
        <button type="submit">
            <FaSearch size={16}/>
        </button>
);

export default SearchButton;