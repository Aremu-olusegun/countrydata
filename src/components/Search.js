import axios from 'axios';
import { useEffect, useState } from 'react';

const Search = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [countryDetails, setCountryDetails] = useState(null);
    const [manyResults, setManyResults] = useState(false);

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleSearch = (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);

        if (inputValue.length >= 2) {
            const filteredResults = countries.filter((country) => {
                const countryName = country.name.common;
                return countryName.includes(inputValue);
            });

            if (filteredResults.length > 10) {
                alert("Too many matches! Please be more specific.");
                setFilteredCountries([]);
                setCountryDetails(null);
                setManyResults(true);
            } else if (filteredResults.length === 1) {
                const country = filteredResults[0];
                setFilteredCountries([]);
                setCountryDetails(country);
                setManyResults(false);
            } else {
                setFilteredCountries(filteredResults);
                setCountryDetails(null);
                setManyResults(false);
            }
        } else {
            setFilteredCountries([]);
            setCountryDetails(null);
        }
    };

    const handleCountryClick = (country) => {
      setCountryDetails(country);
      setFilteredCountries([]);
    };


    return (
        <div>
            <section>
                <label>find countries</label>
                <input type="text" value={inputValue} onChange={handleSearch} />
            </section>
            {countryDetails && (
                <div>
                    <h2>{countryDetails.name.common}</h2>
                    <p>Capital: {countryDetails.capital?.[0]}</p>
                    <p>Area: {countryDetails.area} km²</p>
                    <h3>Languages</h3>
                    <ul>
                        {Object.values(countryDetails.languages).map((language) => (
                            <li key={language}>{language}</li>
                        ))}
                    </ul>
                    <img src={countryDetails.flags.svg} alt={countryDetails.name.common} />
                </div>
            )}
            {filteredCountries.map((country) => (
                <div key={country.idd.root}>
                    <p>{country.name.common}<button style={{marginLeft: "5px"}} onClick={() => handleCountryClick(country)}>show</button></p>
                </div>
            ))}
            {manyResults && <p>Too many results, please be more specific</p>}
        </div>
    );
};

export default Search;
