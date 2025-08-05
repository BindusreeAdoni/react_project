import Moviecard from "../components/Moviecard"
import {useState, useEffect} from "react"
import {searchMovies, getPopularMovies} from "../services/api"
import "../css/Home.css"


function Home(){
    //piece of state to store info or connect to any forms
    //setSQ to update to new state rendered, SQ is a state
    const [searchQuery, setSearchQuery] = useState("");
    const[movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const[loading,setLoading] = useState(true);

    // this when run renders all the movies on to screen but
    // we dont want that everytime whenever some change occurs
    // here, this might be rerendered. so we shall use something
    // called a "usecase" which gives side effects and lets us to only run it when needed
        //const movies = getPopularMovies();

    
    //[] this is a dependency array and checked if anything changed since last time we rendered
    // if changed, then the function inside is run
    useEffect(()=> {
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
             }
             catch (err){
                console.log(err)
                setError("failed to load movies")
             }
             finally{
                setLoading(false);
             }
        }


        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if( !searchQuery.trim()) return
        if(loading) return

        setLoading(true);

        try{
                {/* list of          func that makes    users input
                movies recieved         api call          of movie */}
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults) // this updates internal state and automatically re renders the components
            setError(null)
        } catch(err){
            console.log(err)
            setError("failed to search movies..")
        } finally{
            setLoading(false)
        }

    }; 
  

    return (
    <div className = "Home">
        <form onSubmit={handleSearch} className = "search-form"> 
            <input 
            type = "text" 
            placeholder = "Search for movies..."
            className= "search-input"

            //to store the info typed
            value = {searchQuery}
            // and to change that text stored 
            onChange = {(e) => setSearchQuery(e.target.value)}

            />
            <button 
                type = "submit"
                className = "search-button">
                Search
            </button>
        </form>
        
        {error && <div className = "error-message">{error}</div>}

        {loading? (<div className = "loading">Loading..</div>
        ) :(
        
        <div className = "movies-grid">
            {movies.map(movie => (
                <Moviecard key = {movie.imdbID}  movie = {movie} />))}
        </div>)}
    </div> )}


export default Home;