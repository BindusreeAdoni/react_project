const API_KEY = "15e8c45c"
const BASE_URL =  "http://www.omdbapi.com/?i=tt3896198&apikey=15e8c45c"


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api-key=${API_KEY}`);
    const data = await response.json()
    return data.results

};


export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api-key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results

};


