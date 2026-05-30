import FlagImg from "../FlagImg/FlagImg";
import GameForm from "../GameForm/GameForm";
import { useState } from "react";

const GameInterface = ({ gameCountry, onCorrectGuess, onGameEnd }) => {

    // If country is not fetched display message:
    if (!gameCountry) {
        return(
            <main className="my-auto">
                <h1>Loading Flag-Quiz Game...</h1>
            </main>
        );
    };

    // useState of game results
    const [results, setResults] = useState([]);

    // User feedback during game
    const [feedback, setFeedback] = useState("");

    // Game round useState
    const [gameOver, setGameOver] = useState(false);

    // Handle user result (if correct or wrong)
    const handleResult = (guess) => {
        if (guess.trim().toLowerCase() === gameCountry.name.common.trim().toLowerCase()){
            const answer = {
                country: gameCountry.name.common,
                guess: guess,
                isCorrect: true
            };

            // Updates result and saves it 
            const updatedResults = [...results, answer];
            setResults(updatedResults);

            // Gives user feedback of result
            setFeedback("Correct!");

            // Shows results in console
            console.log("correct");
            console.log("score: ", updatedResults.length);

            // Randomizes a new country
            onCorrectGuess();
        } else {

            // User feedback with a incorrect answer
            setFeedback(`Tough! The correct answer was ${gameCountry.name.common}.`);

            setGameOver(true);

            // Updates result with user result and correct answer
            const updatedResults = {
                score: results.length,
                userGuess: guess,
                correctAnswer: gameCountry.name.common,
            };

            // Handles end game 
            onGameEnd(updatedResults);

        };
    };

    // Reset user stats
    const restartGame = () => {
        setResults([]);
        setFeedback("");
        setGameOver(false);
        onCorrectGuess();
    }

    return (
        <div className="bg-gray-800 flex flex-col items-center h-screen">
            <h1>Flag Quiz</h1>
            
            <section className="py-5 bg-gray-700 w-lg">
                <h2>Guess the flag!</h2>

                <FlagImg flagUrl={gameCountry.flags.png} flagAlt={`Flag of ${gameCountry.flags.alt}`}/>

                {!gameOver && <GameForm countryName={gameCountry.name.common} onFormSubmit={handleResult} />}
                
                {feedback && <p className={gameOver ? "py-3 text-red-600 font-semibold text-xl" : "py-3 text-green-600 font-semibold text-xl"}>{feedback}</p>}

                {gameOver && <button onClick={restartGame} className="w-xs py-2 bg-blue-500 hover:opacity-70 border border-gray text-black text-xl rounded-md cursor-pointer">Play Again</button>}
            </section>
        </div>
    );
};

export default GameInterface;