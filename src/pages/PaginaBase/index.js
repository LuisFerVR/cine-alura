import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container";
import FavoritoProvider from "components/context/Favoritos";
import Pie from "components/Footer";
import { Outlet } from "react-router-dom";

function PaginaBase(){
    return(<>
        <main>
            <Cabecera/>
            <FavoritoProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritoProvider>
            <Pie>Hecho por Luis Fernando Vergara Ruiz</Pie>
        </main>
    </>)
}

export default PaginaBase;