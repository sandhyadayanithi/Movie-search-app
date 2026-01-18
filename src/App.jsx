import React,{useState,useContext} from 'react'
import Popular from './components/Popular.jsx'
import { FavoritesContext } from "./contexts/FavoritesContext.jsx";
import Favourites from './components/Favourites.jsx';

const App = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [toggle,setToggle]=useState(true);

  function popularHandler(){
    setToggle(true);
  }
  function favouriteHandler(){
    setToggle(false);
  }
  return (
    <div className='bg-gray-800 text-white min-h-screen min-w-screen px-5 mx-auto'>
      <h1 className='text-center pt-10 pb-2 font-extrabold text-3xl'>Movie Search App</h1>
      <div className='flex justify-center items-center gap-4 mt-4 mb-8'>
        <button className='cursor-pointer' style={{textDecoration: toggle? 'underline': 'none',textUnderlineOffset: "6px"}} onClick={popularHandler}>Search / Popular</button>
        <button className='cursor-pointer' style={{textDecoration: !toggle? 'underline': 'none',textUnderlineOffset: "6px"}} onClick={favouriteHandler}>Favourites ({favorites.length})</button>
      </div>
      
      {toggle?<Popular></Popular>:<Favourites></Favourites>}
    </div>
  )
}

export default App
