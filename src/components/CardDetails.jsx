import React, { useContext,useEffect } from 'react'
import { genreMap } from '../assets/genres.js'
import { FavoritesContext } from "../contexts/FavoritesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CardDetails = ({data,onClose}) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const genres = data?.genre_ids?.map(id => genreMap[id]);

  function favouriteHandler(movie) {
    const alreadyExists = favorites.some(fav => fav.id === movie.id);
    if (!alreadyExists) {
      setFavorites([movie,...favorites]);
    }
  }

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-gray-800 w-170 max-h-[80vh] overflow-y-auto rounded-xl shadow-xl p-6 text-white">
        <h1 className='text-2xl font-bold text-center mb-3'>{data?.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={data?.title} className="mx-auto rounded-lg w-60 h-90 my-2"></img>
        <p>{data?.overview}</p>
        <p className='font-semibold'>Release Date: {data?.release_date}</p>
        <p className='font-semibold'>Rating: {data?.vote_average?.toFixed(1)}</p>
        <p>Genres: {genres.join(", ")}</p>
        <div className='flex gap-3 mt-3 justify-end'>
          <button onClick={()=>favouriteHandler(data)} className='text-sm bg-pink-500 px-2 py-1 rounded cursor-pointer'><FontAwesomeIcon icon={faStar} /> Add to favourites</button>
          <button onClick={onClose} className='text-sm bg-gray-900 px-2 py-1 rounded cursor-pointer'><FontAwesomeIcon icon={faCircleXmark} /> Close</button>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
