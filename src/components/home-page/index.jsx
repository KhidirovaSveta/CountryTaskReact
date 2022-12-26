import React, { useEffect, useState } from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterSearch from "../filterSearch";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  // const [filterParam, setFilterParam] = useState(["All"]);

  //   useEffect(() => {
  //     fetch("https://restcountries.com/v2/all")
  //       .then((response) => response.json())
  //       .then((data) => setCountries(data));
  //   }, []);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((data) => setCountries(data.data));
  }, []);

  return (
    <div className="homePage">
      <div className="container">
        <FilterSearch setCountries={setCountries} />
        <div className="card-box">
          {countries.map((countries, i) => {
            return (
              <Link to={`countries-detail/${countries.name}`} key={i}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    className="imgCount"
                    src={countries.flags.png}
                  />
                  <Card.Body>
                    <Card.Title>{countries.name}</Card.Title>
                    <Card.Text>{`Population: ${countries.population}`}</Card.Text>
                    <Card.Text>{`Region: ${countries.region}`}</Card.Text>
                    <Card.Text>{`Capital: ${countries.capital}`}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
