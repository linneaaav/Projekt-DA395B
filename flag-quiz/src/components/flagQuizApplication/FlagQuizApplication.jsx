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

    // useState to handle highscore
    const [highscore, setHighscore] = useState(() => {

        // Check if any highscores saved in localStorage
        const savedHighscore = localStorage.getItem("flagQuizHighscore");
        return savedHighscore ? parseInt(savedHighscore, 10) : 0;
    })

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
    };

    // Check final score of game
    const handleGameEnd = (updatedResults) => {
        console.log("Game Over! ", updatedResults);

        const finalScore = updatedResults.score;

        // If final score is higher than highscore, save to localStorage
        if (finalScore > highscore) {
            setHighscore(finalScore);
            localStorage.setItem("flagQuizHighscore", finalScore.toString());
            console.log("New highscore!", finalScore);
        } else {
            // Return this
            console.log(`Your final score this round is: ${finalScore} \n Your current highscore is still ${highscore}`)
        }
    };
        
    return (
        <div className="bg-gray-900 max-w-screen flex flex-col items-center">
            <section className="w-full max-w-lg rounded-xl border border-yellow-500 bg-gray-800 p-4 m-4">
                <p className="text-sm uppercase tracking-wide">
                    <span className="text-lightgray-600">Highscore: </span> 
                    <span className="text-yellow-600 font-bold">{highscore}</span>
                </p>
            </section>
            <GameInterface gameCountry={country} onCorrectGuess={randomizeCountry} onGameEnd={handleGameEnd} />
        </div>
    );
};

export default FlagQuizApplication;