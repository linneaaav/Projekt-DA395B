import { useEffect, useState } from "react";

const FlagQuizApplication = () => {
    
    const BASE_URL = `https://restcountries.com/v3.1/`;

    // Array for saving all countries
    const [allCountries, setAllCountries] = useState([]);

    // Array for setting a randomized country
    const [country, setCountry] = useState([]);

    // String for handling error message
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                // Fetch all countries from API
                const response = await fetch(`${BASE_URL}all?fields=name,flags`); // Able to fetch other attributes like capital, etc.
                const data = await response.json();

                console.log(data);

                // Set all countries to useState allCountries
                setAllCountries(data);


            } catch (err) {
                // Display error message in case of error
                setError(err.message);
                alert("Something went wrong!" + error);
                console.log(err);
            }
        }
        // Run function fetchCountries()
        fetchCountries();
    }, []);


    return (
        <div className="flex items-center">
            {/* Lägg till komponenter*/}
        </div>
    );
};

export default FlagQuizApplication;