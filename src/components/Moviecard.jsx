import "../css/Moviecard.css"

function Moviecard({movie}){

    function onFavClick(){
        alert("clicked")
    }

    return <div className = "movie-card">
        <div className = "movie-poster"></div>
                        {/* this is called template literal or template string 
                        where string interpolation is creating a new string by doing substitution of placeholders*/}
            <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.title}/>
            <div className = "movie_overlay">
                <button className = "favourite_button" onClick = {onFavClick}> 
                    ❤️
                </button>
            </div>
            <div className = "movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
}

export default Moviecard