import { useContext, useState } from "react";
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

export function useFavoriteContext(){
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite){
        const repeatedFavorite = favorite.some((item)=> item.id === newFavorite.id)
    
        let newList = [...favorite]
        if (!repeatedFavorite){
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        newList = favorite.filter((fav)=> fav.id !== newFavorite.id)
        return setFavorite(newList)
    }

    return{
        favorite,
        addFavorite
    }
}