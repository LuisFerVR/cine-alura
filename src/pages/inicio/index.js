import Banner from "../../components/Banner";
import Cabecera from "../../components/Cabecera/Cabecera";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";

function Inicio (){
    return (<>
        <Cabecera/>
        <Banner img="home" color="#15458"/>
        <Titulo><h1>Un lugar para guardar tus videos favoritos</h1></Titulo>
        <Card id="1" titulo="Gato" capa="https://i.pinimg.com/originals/62/43/78/624378594b7dcbaf03c5b98a358ad32e.jpg"/>
    </>);
}
export default Inicio;