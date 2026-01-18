import React, { useContext } from 'react'
import { FavoritesContext } from "../contexts/FavoritesContext.jsx";
import Card from './Card.jsx';

const Favourites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <div className='grid gap-5 grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 shrink-2 pb-5'>
      {favorites?.map((favorite)=>{
        return <Card key={favorite.id} data={favorite}></Card>
      })}
    </div>
  )
}

export default Favourites
