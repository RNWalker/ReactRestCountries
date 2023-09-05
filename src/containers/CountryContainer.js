import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import VisitedCountryList from '../components/VisitedCountryList';

const CountryContainer = () => {
  const [countries, setCountries] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const loadData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    setCountries(jsonData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className = "everything">
      <h1>Countries</h1>
      <h2> Check off all the countries you have visited!</h2>
      <div className = "container">
      {countries ? (
        <CountryList
          countries={countries}
          visitedCountries={visitedCountries}
          setVisitedCountries={setVisitedCountries}
        />
      ) : (
        <p>loading...</p>
      )}
      <div className = "visited-countries">

      {visitedCountries !== null ? ( // Check for null, not just existence
        <VisitedCountryList visitedCountries={visitedCountries} />
      ) : (
        <p>loading...</p>
      )}
      </div>
    </div>
    </div>
  );
};

export default CountryContainer;