const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;
const BASE_URL = `https://api.restcountries.com/countries/v5`;

export async function FetchCountries(){
    try {
        // Fetch all countries from API
        const response = await fetch(`${BASE_URL}?response_fields=names.common%2Cflag.url_png%2Ccodes.alpha_2&limit=100&pretty=1`, { // Able to fetch other attributes like capital, etc.
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Fel vid anrop: ${response.status}`);
        }
        const result = await response.json();

        // Returns all countries in an array
        return result.data.objects;

    } catch (err) {
        // Display error message in case of error
        console.log(err);
        return null;
    };
};

