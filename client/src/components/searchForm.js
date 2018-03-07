import React from "react";
import SearchInput from './searchInput';
import SearchButton from './searchButton';
import CancelButton from './cancelButton';
import OptionButtons from './optionButtons';


const SearchForm = ({searchTerm, searchOption, onChange, onSubmit, reset, handleOptionChange }) => {
    return (
        <form className="search" onSubmit={(e) => {onSubmit(e)}}>
            <div className="search-group">
                <SearchButton />
                <SearchInput value={searchTerm} onChange={onChange} />
                <CancelButton reset={reset} />
            </div>
            <OptionButtons handleOptionChange={handleOptionChange} checked={searchOption}/>
        </form>
    );
}

export default SearchForm;

