import Moviecard from "../components/Moviecard"
import {useState} from "react"


function Home(){
    //piece of state to store info or connect to any forms
    //setSQ to update to new state rendered, SQ is a state
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        { id:1, title: "film1", releaseDate: "2020"},
        { id:2, title: "film2", releaseDate: "2020"},
        { id:3, title: "film3", releaseDate: "2020"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
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

        <div className = "movies-grid">
            {movies.map(movie => (
                <Moviecard movie = {movie} key = {movie.id}/>))} 
        </div>
    </div>)
}

export default Home;