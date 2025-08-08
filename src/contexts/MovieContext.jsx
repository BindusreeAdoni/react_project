import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)


// provides state to any component wrapped inside it
export const MovieProvider = ({children}) => {

    const[Favourite, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")

        if(storedFavs) setFavourites(JSON.parse(storedFavs))
    },[])


    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(Favourite))
    }, [Favourite])


    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavourites = (movieId) => {
        return Favourite.some(movie => movie.id === movieId)
    }
    

    // to provide values to the children for them to use
    const value = {
        Favourite, 
        addToFavourites, 
        removeFromFavourites,
        isFavourites
    };

    // now anything inside value when given to this,
    // adds all the above mentioned into the children object
    return <MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>
}

export default MovieProvider;