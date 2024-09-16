import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "Myfavorites"


export default function FavoritesProvider({ children }){
    const [ favorite, setFavorite] = useState([])

    return (
        <FavoritesProvider value = {{favorite, setFavorite}}
        >
            {children}

        </FavoritesProvider>
    );
}