import React, { useState,useContext,useEffect } from 'react'
import CardDetails from './CardDetails.jsx'
import { FavoritesContext } from "../contexts/FavoritesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Card = ({data}) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function detailsHandler(movie){
    setShowDetails(true);
    setSelectedMovie(movie);
  }

  function favouriteHandler(movie) {
    const alreadyExists = favorites.some(fav => fav.id === movie.id); //if atleast one item in the array matches returns true else false
    if (!alreadyExists) {
      setFavorites([movie,...favorites]);
    }
  }

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <div className="group relative w-74 h-76 rounded-xl overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-start transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${data?.poster_path})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <h2 className="text-xl font-bold text-center">{data?.title}</h2>
          <h3 className="text-xl">{data?.release_date?.slice(0,4)}</h3>

          <div className='flex justify-center items-center gap-3'>
            <button onClick={()=>detailsHandler(data)} className="text-xs bg-blue-800 px-2 py-1 rounded cursor-pointer"><FontAwesomeIcon icon={faCircleInfo} /> Details</button>
            <button onClick={()=>favouriteHandler(data)} className="text-xs bg-pink-500 px-2 py-1 rounded cursor-pointer"><FontAwesomeIcon icon={faStar} /> Add to favourites</button>
          </div>
        </div>

      </div>

      {showDetails && <CardDetails data={selectedMovie} onClose={()=>setShowDetails(false)}/>}
    </>
  )
}

export default Card
