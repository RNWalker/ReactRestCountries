import React from 'react';
import Country from './Country';

const CountryList = ({ countries, visitedCountries, setVisitedCountries }) => {
  return (
    <div>
      {countries.map((country) => (
        <Country
          key={country.id}
          country={country}
          visitedCountries={visitedCountries}
          setVisitedCountries={setVisitedCountries}
        />
      ))}
    </div>
  );
};

export default CountryList;