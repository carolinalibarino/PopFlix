import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList";
import { useEffect, useState } from "react";
import Loader from "../Loader";

//filtrando por categoria ou título 
function filterVideos(videos, searchTerm) {
    if (!videos || !Array.isArray(videos)) {
      return []; // ou outra lógica caso "videos" não seja válido
    }
  
    return videos.filter((video) => {
      if (typeof video.title === 'string') {
        return video.title.includes(searchTerm);
      }
      return false;
    });
  }
  

function SearchVideoList({ videos }){

    const [ searchText, setSearchText ] = useState('')
    const foundVideos = filterVideos(videos, searchText)

    const [ loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=> setLoading(false, 500))
    },[])

    return (
        <section className={styles.container}>
            <input 
            type="search" 
            placeholder="Pesquisar..."
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            />
            { 
                loading ? <Loader/> :
                <VideoList 
                    videos={foundVideos}
                    emptyHeading={`Sem vídeos sobre "${searchText}"`}
            />
            }
        </section>
    );
}

export default SearchVideoList;