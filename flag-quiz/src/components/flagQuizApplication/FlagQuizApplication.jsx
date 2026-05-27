import { useEffect, useState } from "react";
import { FetchCountries } from "../../API/RESTCountryAPI";
import { getRandomCountry } from "../../utils/GetRandomCountry";


const FlagQuizApplication = () => {
    
    // useState array of all countries from API
    const [allCountries, setAllCountries] = useState([]);

    // useState of country used in game
    const [country, setCountry] = useState(null);

    // useState to handle error message
    const [error, setError] = useState("");

    useEffect(() => {
        const getCountries = async () => {
            try {
                // Use function FetchCountries() to get JSON-object
                const data = await FetchCountries();
                // All countries saved into an array
                setAllCountries(data);

                // Use function getRandomCountry() to randomize the first country
                const firstCountry = getRandomCountry(data);

                // Set randomized country
                setCountry(firstCountry);

            } catch(err) {
                setError("Something went wrong! " + err.message);
            }
        };
        getCountries();
    }, []);

    // Function to set a new country
    const randomizeCountry = () => {
        const newCountry = getRandomCountry(allCountries);
        setCountry(newCountry);
    }

    return (
        <div className="flex items-center">
            {/* Lägg till komponenter*/}
        </div>
    );
};

export default FlagQuizApplication;