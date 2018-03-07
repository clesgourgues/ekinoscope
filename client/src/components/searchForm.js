import React from "react";
import SearchInput from './searchInput';
import SearchButton from './searchButton';
import CancelButton from './cancelButton';
import OptionButtons from './optionButtons';


const SearchForm = ({searchTerm, searchOption, onChange, onSubmit, reset, handleOptionChange, path }) => {
    let option = '';
     if(path === '/') {
        option = searchOption
    } else if(path === '/map') {
        option = "location"
    } else if(path === '/project') {
        option = "project"
    } 
    const Options = option
    return (
        <form className="search" onSubmit={(e) => {onSubmit(e)}}>
            <div className="search-group">
                <SearchButton />
                <SearchInput value={searchTerm} onChange={onChange} />
                <CancelButton reset={reset} />
            </div>
            <OptionButtons handleOptionChange={handleOptionChange} checked={Options}/>
        </form>
    );
}

export default SearchForm;

