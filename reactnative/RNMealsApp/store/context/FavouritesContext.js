import { createContext, useState } from "react";

const initialState = {
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
};

export const FavouritesContext = createContext(initialState);

export function FavouritesProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavourite = (id) => {
    setFavouriteMealIds((currId) => [...currId, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteMealIds((currId) => currId.filter((curr) => curr !== id));
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}
