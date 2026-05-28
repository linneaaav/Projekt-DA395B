import { useState } from 'react';

const GameForm = ({ countryName, onFormSubmit }) => {
    // Save the user's input
    const [userGuess, setUserGuess] = useState("");

    const onSubmitGuess = (e) => {
        e.preventDefault();

        console.log("User guessed: ", userGuess);

        // Send userGuess to parent
        onFormSubmit(userGuess);

        // Reset input-field
        setUserGuess("");
    };

    // Controls user input is not empty
    const isInputEmpty = userGuess.trim() === "";

    return(
        <form onSubmit={onSubmitGuess}>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control is-valid" 
                    placeholder="Name the country..." 
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    required
                />
                <div className="invalid-feedback">
                    Please enter a country!
                </div>
            </div>
            <button 
                type="submit" 
                className="btn btn-success">
                    Guess!
            </button>
        </form>
    );
};

export default GameForm;