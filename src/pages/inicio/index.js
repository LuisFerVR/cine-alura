import Banner from "../../components/Banner";
import Cabecera from "../../components/Cabecera/Cabecera";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import styles from "./index.module.css"
import videos from "../../data/db.json"
function Inicio (){
    return (<>
        <Cabecera/>
        <Banner img="home" color="#15458"/>
        <Titulo><h1>Un lugar para guardar tus videos favoritos</h1></Titulo>
        <section className={styles.container}>
            {videos.map((video)=>{
                return <Card {...video} key={video.id}/>
            })}
        </section>
    </>);
}
export default Inicio;