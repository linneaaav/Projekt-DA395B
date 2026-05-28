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

    return(
        <form onSubmit={onSubmitGuess} className="w-full max-w-md mx-auto space-y-4">
            <div className="mb-3">
                <input 
                    type="text" 
                    className="w-xs my-2 px-4 py-2 border border-gray rounded-md bg-gray-800 text-white" 
                    placeholder="Name the country..." 
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    required
                />
            </div>
            <button 
                type="submit" 
                className="w-xs py-2 bg-lime-500 hover:opacity-70 border border-gray text-black rounded-md cursor-pointer">
                    Guess!
            </button>
        </form>
    );
};

export default GameForm;