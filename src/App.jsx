import { Routes,Route } from 'react-router-dom';
import './css/App.css'
import Moviecard from "./components/Moviecard"
import Home from "./pages/Home"
import Favourite from "./pages/favourites";
import NavBar from "./components/NavBar";
import {MovieProvider} from "./contexts/MovieContext"


function App() {
  return (
    <MovieProvider>
   <div>
      <NavBar />
    <main className = "main-content">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/favourites" element = {<Favourite />}/>
      </Routes>

    </main>
   </div>
   </MovieProvider>
  );  
}


export default App;
