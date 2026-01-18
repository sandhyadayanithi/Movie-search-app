import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const favouritesArray=JSON.parse(localStorage.getItem('fav'));
  const [favorites, setFavorites] = useState(favouritesArray || []);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
