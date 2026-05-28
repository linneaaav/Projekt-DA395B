import FlagImg from "../FlagImg/FlagImg";
import GameForm from "../GameForm/GameForm";
import { useState } from "react";

const GameInterface = ({ gameCountry, onCorrectGuess }) => {
    

    // If country is not fetched display message:
    if (!gameCountry) {
        return(
            <main className="my-auto">
                <h1>Loading Flag-Quiz Game...</h1>
            </main>
        );
    };

    const [results, setResults] = useState([]);
    const [feedback, setFeedback] = useState("");
    const [gameOver, setGameOver] = useState(false);

    const handleResult = (guess) => {
        if (guess.trim().toLowerCase() === gameCountry.name.common.trim().toLowerCase()){
            const answer = {
                country: gameCountry.name.common,
                guess: guess,
                isCorrect: true
            };

            const updatedResults = [...results, answer];
            
            setResults(updatedResults);
            setFeedback("Correct!");

            console.log("correct");
            console.log("score: ", updatedResults.length);
            onCorrectGuess();
        } else {
            const wrongAnswer = {
                country: gameCountry.name.common,
                guess: guess,
                isCorrect: false
            };

            setFeedback(`Tough! The correct answer was ${gameCountry.name.common}.`);
            setGameOver(true);

            const updatedResults = {
                score: results.length,
            };

            console.log("The correct answer was ", gameCountry.name.common);
            console.log("results: ", updatedResults);

        };
    };

    const restartGame = () => {
        setResults([]);
        setFeedback("");
        setGameOver(false);
        onCorrectGuess();
    }

    return (
        <div className="bg-gray-800 flex flex-col items-center h-screen">
            <h1>Flag Quiz</h1>

            {/* 
                UserResult
            <section className="score-section">
                <p>Score: {score}</p>
            </section> 
            
            */}
            
            <section className="py-5 bg-gray-700 w-lg">
                <h2>Guess the flag!</h2>

                {/*
                    FlagImg
                <div className="flag-image">
                    <img src={flagUrl} alt={flagAlt} className="flag" />
                </div>

                */}

                <FlagImg flagUrl={gameCountry.flags.png} flagAlt={`Flag of ${gameCountry.flags.alt}`}/>

                {/*
                    GameForm
                <form onSubmit={onSubmitGuess} className="guess-form">
                    <input 
                        type="text"
                        placeholder="Enter your guess..."
                        value={userGuess}
                        onChange={(e) => setUserGuess(e.target.value)}
                    />
                    <button type="submit">Submit Guess</button>
                </form> 
                
                */}
               {!gameOver && <GameForm countryName={gameCountry.name.common} onFormSubmit={handleResult} />}
                
                {feedback && <p className="feedback">{feedback}</p>}

                {gameOver && <button onClick={restartGame} className="w-xs py-2 bg-blue-500 hover:opacity-70 border border-gray text-black rounded-md cursor-pointer">Play Again</button>}
            </section>
        </div>
    );
};

export default GameInterface;