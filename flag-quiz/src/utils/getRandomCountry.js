/* Returns randomized country from an array with more than one country */
export const getRandomCountry = (countriesList) => {
    // If array is empty return null
    if (!countriesList || countriesList.length === 0) return null;

    // Randomize countryIndex based on countriesList length
    const countryIndex = Math.floor(Math.random() * countriesList.length);

    // Return country based of countryIndex
    return countriesList[countryIndex];
};