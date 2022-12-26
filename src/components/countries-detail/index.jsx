import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
import "./index.scss";

const CountriesDetail = () => {
  const [countries, setCountries] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  //  console.log(countries);
  return (
    <>
      <button className="goBackBtn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i>Back
      </button>
      <div className="details">
        {countries.map((country, i) => {
          return (
            <div className="count-details" key={i}>
              <img src={country.flags.png} alt="" />
              <div className="count-info">
                <h1>{country.name.common}</h1>
                <p>{`Population: ${country.population}`}</p>
                <p>{`Region: ${country.region}`}</p>
                <p>{`Sub Region: ${country.subregion}`}</p>
                <p>{`Capital: ${country.capital}`}</p>

                
              </div>
                <div className="val">
                <p>{`Currencies: ${Object.values(country.currencies)[0].name}`}</p>
                <p>{`languages: ${Object.values(country.languages)[0]}`}</p>
                </div>
            </div>
          );
        })}
      </div>

      {/* <ul>
      <Button type="primary" ghost danger onClick={() => navigate("/")}>
        Go to Home
      </Button> */}
    </>
  );
};

export default CountriesDetail;
