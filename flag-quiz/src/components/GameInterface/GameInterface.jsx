import FlagImg from "../FlagImg/FlagImg";
import GameForm from "../GameForm/GameForm";

const GameInterface = ({ gameCountry }) => {

    // If country is not fetched display message:
    if (!gameCountry) {
        return(
            <main className="my-auto">
                <h1>Loading Flag-Quiz Game...</h1>
            </main>
        );
    };

    const handleResult = (guess) => {
        if (guess.trim().toLowerCase() === gameCountry.name.common.trim().toLowerCase()){
            
        }
    };

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
                <GameForm countryName={gameCountry.name.common} onFormSubmit={handleResult} />

            </section>
        </div>
    );
};

export default GameInterface;