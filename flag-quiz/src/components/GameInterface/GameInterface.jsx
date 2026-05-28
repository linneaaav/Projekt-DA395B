


const GameInterface = ({ country }) => {
    return (
        <main className="game-interface">
            <h1>Flag Quiz</h1>

            {/* 
                UserResult
            <section className="score-section">
                <p>Score: {score}</p>
            </section> 
            
            */}
            
            <section className="quiz-card">
                <h2>Guess the flag!</h2>

                {/*
                    FlagImg
                <div className="flag-image">
                    <img src={flagUrl} alt={flagAlt} className="flag" />
                </div>

                */}

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