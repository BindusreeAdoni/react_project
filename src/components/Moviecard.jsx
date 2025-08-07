import "../css/Moviecard.css"
import {useMovieContext} from "../contexts/MovieContext"

function Moviecard({movie}){

    const {removeFromFavourites,isFavourites, addToFavourites} = useMovieContext()
    const Favourite = isFavourites(movie.id)

    function onFavClick(e){
        e.preventDefault()
        if (Favourite) removeFromFavourites(movie.id)
            else addToFavourites(movie)
    }

    return <div className = "movie-card">
        <div className = "movie-poster">
                        {/* this is called template literal or template string 
                        where string interpolation is creating a new string by doing substitution of placeholders*/}
            <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.title}/>
            <div className = "movie-overlay">
                <button className = {`favourite-btn ${Favourite? "active" : ""}`} onClick = {onFavClick}> 
                    🤍
                </button>
            </div>
            </div>
            <div className = "movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
}

export default Moviecard