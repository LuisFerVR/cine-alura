import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favoritos from "./pages/Favoritos";
import Cabecera from "./components/Cabecera/Cabecera";
import Container from "./components/Container";
import Pie from "./components/Footer";
import FavoritoProvider from "./components/context/Favoritos";
import Player from "pages/Player";
import NotFound from "pages";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Cabecera/>
            <Container>
                <FavoritoProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Routes>
                </FavoritoProvider>
            </Container>
            <Pie>Hecho por Luis Fernando Vergara Ruiz</Pie>
        </BrowserRouter>
    );
}

export default AppRoutes;
