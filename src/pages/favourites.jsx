import "../css/Favourites.css"
import {useMovieContext} from "../contexts/MovieContext"
import Moviecard from "../components/Moviecard"



function Favourite(){

    const {Favourite} = useMovieContext();

    if(Favourite) {
        
        return (
        
        <div className = "favs"> <h2>Your favs</h2>
        <div className = "favs-grid">
        <div className = "movies-grid">
            {Favourite.map((movie) => (
                <Moviecard movie = {movie} key = {movie.id} />
            ))}
        </div>
        </div>
        </div>)
    }


    return (<div className = "favourites_empty"> 
        <h2>No favs yet</h2>
        <p>Start adding movies to appear here</p>
        </div>)
}


export default Favourite;