import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./index.scss"

const FilterSearch = ({ setCountries }) => {
  const [filter, setFilter] = useState([]);
  const inputValue = useRef();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((data) => setFilter(data.data));
  }, []);

  const searchHere = () => {
    let filteredCountry = filter.filter((country) =>
      country.name
        .toLocaleLowerCase()
        .includes(inputValue.current.value.toLocaleLowerCase())
    );
    setCountries(filteredCountry);
  };

  const filterHere = (q) => {
    let filteredRegion = filter.filter((el) =>
      el.region.toLocaleLowerCase().includes(q.target.value.toLocaleLowerCase())
    );
    setCountries(filteredRegion);
  };

  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        ref={inputValue}
        type="text"
        placeholder="Search for a country…"
        onChange={() => searchHere()}
      />

      <select
        name="country"
        className="country"
        id="country"
        onChange={(q) => filterHere(q)}
      >
        <option value="Filter By Region" disabled>
          Filter By Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterSearch;
