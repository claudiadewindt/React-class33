import React from 'react';
import './SearchForm.css';

function SearchForm({ citySearched, setCitySearched, search, setErrMsg }) {
  const handleSearch = (e) => {
    e.preventDefault();
    setErrMsg(null);
    setCitySearched(e.target.value);
  };
  return (
    <>
      <form onSubmit={search}>
        <input
          type="text"
          name="search-city"
          placeholder="&#x1F50E;&#xFE0E; Search City"
          onChange={handleSearch}
          value={citySearched}
        />

        <button
          className="search-button"
          type="submit"
          disabled={citySearched !== '' ? false : true}
        >
          Search
        </button>
      </form>
    </>
  );
}

export default SearchForm;
