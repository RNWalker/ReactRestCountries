import React, { useState } from 'react';

const Country = ({ country, visitedCountries, setVisitedCountries }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked); // Use the previous state

    if (!isChecked) {
      setVisitedCountries((prevVisitedCountries) => [
        ...prevVisitedCountries,
        country.name.common,
      ]);
    } else {
      setVisitedCountries((prevVisitedCountries) =>
        prevVisitedCountries.filter((name) => name !== country.name.common)
      );
    }
  };

  return (
    <div className="country-checkbox">
      <div className="checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <h2>{country.name.common}</h2>
    </div>
  );
};

export default Country;