import { useState } from 'react';

const SearchForm = ({ setCity }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    e.preventDefault();
    if (input) {
      try {
        const result = await fetch(url);
        const data = await result.json();
        setCity(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="searchForm">
      <input
        type="text"
        placeholder="&#x1F50E;&#xFE0E; Search City"
        value={input}
        id="header-search"
        onChange={(e) => setInput(e.target.value)}
        className="searchInput"
      />

      <button
        onClick={handleSubmit}
        type="submit"
        data-testid="search_city"
        className="searchButton"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
