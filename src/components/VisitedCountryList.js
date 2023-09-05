import Country from "./Country";

const VisitedCountryList = ({ visitedCountries }) => {
    if (!Array.isArray(visitedCountries)) {
      return <p>No visited countries yet.</p>;
    }
  
    return (
      <div>
        <h2>Visited Countries:</h2>
        <ul>
          {visitedCountries.map((visitedCountry, index) => (
            <li key={index}>{visitedCountry}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default VisitedCountryList;
