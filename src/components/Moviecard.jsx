import "../css/Moviecard.css"

function Moviecard({movie}){

    function onFavClick(){
        alert("clicked")
    }

    return <div className = "movie-card">
        <div className = "movie-poster"></div>
            <img src = {movie.url} alt= {movie.title}/>
            <div className = "movie_overlay">
                <button className = "favourite_button" onClick = {onFavClick}> 
                    ❤️
                </button>
            </div>
            <div className = "movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
}

export default Moviecard