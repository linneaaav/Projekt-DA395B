const BASE_URL = `https://restcountries.com/v3.1/`;

export async function FetchCountries(){
    try {
        // Fetch all countries from API
        const response = await fetch(`${BASE_URL}all?fields=name,flags`); // Able to fetch other attributes like capital, etc.
        const data = await response.json();

        // Returns all countries in an array
        return data;

    } catch (err) {
        // Display error message in case of error
        console.log(err);
    };
};

