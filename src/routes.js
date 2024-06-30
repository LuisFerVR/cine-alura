import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favoritos from "./pages/Favoritos";
import Cabecera from "./components/Cabecera/Cabecera";
import Container from "./components/Container";
import Pie from "./components/Footer";
import FavoritoProvider from "./components/context/Favoritos";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Cabecera/>
            <Container>
                <FavoritoProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </FavoritoProvider>
            </Container>
            <Pie>Hecho por Luis Fernando Vergara Ruiz</Pie>
        </BrowserRouter>
    );
}

export default AppRoutes;
