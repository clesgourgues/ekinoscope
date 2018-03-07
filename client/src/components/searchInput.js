import React from "react";

const SearchInput = ({ value, onChange }) => (
    <input type="text" value={value} onChange={onChange} placeholder='Type your search'/>
);

export default SearchInput;