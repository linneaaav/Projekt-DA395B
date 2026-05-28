import { useEffect, useState } from "react";
import { FetchCountries } from "../../API/RESTCountryAPI";
import { getRandomCountry } from "../../utils/getRandomCountry";
import GameInterface from "../GameInterface/GameInterface";


const FlagQuizApplication = () => {
    
    // useState array of all countries from API
    const [allCountries, setAllCountries] = useState([]);

    // useState of country used in game
    const [country, setCountry] = useState(null);

    // useState to handle error message
    const [error, setError] = useState("");

    // const [userGuess, setUserGuess] = useState("");

    // const [feedback, setFeedback] = useState("");

    // const [score, setScore] = useState(0);

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
        setUserGuess("");
    };

    /* 
        
    const handleSubmitGuess = (e) => {
        e.preventDefault();
        
        if (userGuess.trim().toLowerCase() === "" ) {
            setFeedback("Please enter a guess!");
            return;
        }

        if (userGuess.trim().toLowerCase() === country.name.common.toLowerCase()) {
            setScore(score + 1);
            setFeedback("Correct!");
        }   else {
            setFeedback(`Wrong! The correct answer was ${country.name.common}.`);
        }
        
        setUserGuess("");
    }; */

    /* if (error) {
        return <p>{error}</p>;
    }

    if (!country) {
        return <p>Loading...</p>;
    } */

    return (
        <GameInterface 
            country={country}
        />
    );
};

export default FlagQuizApplication;