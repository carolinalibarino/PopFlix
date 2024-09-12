import Header from "../../components/Header";
import styles from "./Search.module.css";

function Search(){
    return(
        <>
            <Header/>
            <section className={styles.search}>
                <h2>Pesquisar</h2>
            </section>
            <Footer/>
        </>
    );
}

export default Search;