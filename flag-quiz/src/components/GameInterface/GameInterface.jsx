import FlagImg from "../FlagImg/FlagImg";
import GameForm from "../GameForm/GameForm";
import { useState } from "react";

const GameInterface = ({ gameCountry, onCorrectGuess, onGameEnd, highscore }) => {

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
    
    const [finalScore, setFinalScore] = useState(0);

    const [isNewHighscore, setIsNewHighscore] = useState(false);

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
            setFeedback(`${guess} was correct!`);

            // Shows results in console
            console.log("correct");
            console.log("score: ", updatedResults.length);

            // Randomizes a new country
            onCorrectGuess();
        } else {

            // User feedback with a incorrect answer
            setFeedback(`Tough! ${guess} is not correct... \n The correct answer was ${gameCountry.name.common}.`);

            setGameOver(true);

            // Updates result with user result and correct answer
            const score = results.length;
            setFinalScore(score);
            setIsNewHighscore(score > highscore);

            const updatedResults = {
                score: score,
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
        setIsNewHighscore(false);
    }

    return (
        <div className="w-full flex flex-col items-center text-center">
            <h1>Flag Quiz</h1>

            {!gameOver && (
                <section className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl border border-blue-500 bg-gray-800 p-3 sm:p-4 mb-4">
                    <p className="text-sm uppercase tracking-wide">
                        <span className="text-lightgray-600">Points: </span>
                        <span className="text-green-600 font-bold">{results.length}</span>
                    </p>
                </section>
            )}
            
            <section className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-gray-700 rounded-xl px-4 py-5 sm:px-6">
                <h2>Guess the flag!</h2>

                <FlagImg flagUrl={gameCountry.flags.png} flagAlt={`Flag of ${gameCountry.flags.alt}`}/>

                {feedback && <p className={gameOver ? "py-3 text-red-600 font-semibold text-xl whitespace-pre-line" : "py-3 text-green-600 font-semibold text-xl"}>{feedback}</p>}

                {!gameOver && <GameForm countryName={gameCountry.name.common} onFormSubmit={handleResult} />}

                {gameOver && (
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={restartGame}>Play Again</button>
                            <section className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl border border-red-500 bg-gray-800 p-4 mt-6">
                                <p className="text-sm uppercase tracking-wide">
                                    <span className="text-lightgray-600">final score: </span>
                                    <span className="text-red-500 font-bold">{finalScore}</span>
                                </p>

                                {isNewHighscore && (
                                    <p className="text-sm uppercase tracking-wide mt-2">
                                        <span className="text-yellow-600 font-bold">New Highscore! </span>
                                    </p>
                                )}
                            </section>
                    </div>
                )}
            </section>
        </div>
    );
};

export default GameInterface;