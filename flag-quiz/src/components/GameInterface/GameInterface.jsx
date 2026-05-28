import FlagImg from "../FlagImg/FlagImg";


const GameInterface = ({ gameCountry }) => {

    // If country is not fetched display message:
    if (!gameCountry) {
        return(
            <main className="container my-auto">
                <h1>Loading Flag-Quiz Game...</h1>
            </main>
        );
    };

    return (
        <main className="container">
            <h1>Flag Quiz</h1>

            {/* 
                UserResult
            <section className="score-section">
                <p>Score: {score}</p>
            </section> 
            
            */}
            
            <section className="container-fluid py-5">
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
            </section>
        </main>
    );
};

export default GameInterface;