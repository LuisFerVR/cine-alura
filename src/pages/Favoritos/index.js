import Titulo from "../../components/Titulo/index";
import styles from "./Favoritos.module.css"
import Card from "../../components/Card/index";
import { useFavoritosContext } from "../../components/context/Favoritos";
import Banner from "../../components/Banner/index";

function Favoritos(){
    const {favorito}=useFavoritosContext();
    return(<>
    <Banner img="favorite" color="#AF7EAA"/>
    <Titulo><h1>Mis favoritos</h1></Titulo>
    <section className={styles.container}>
        {favorito.map(fav=>{
            return <Card {...fav} key={fav.id}/>
        })}
    </section>
    </>);
}

export default Favoritos