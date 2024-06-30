import Banner from "../../components/Banner";
import Cabecera from "../../components/Cabecera/Cabecera";
import Titulo from "../../components/Titulo";

function Inicio (){
    return (<>
        <Cabecera/>
        <Banner img="home" color="#15458"/>
        <Titulo><h1>Un lugar para guardar tus videos favoritos</h1></Titulo>
    </>);
}
export default Inicio;