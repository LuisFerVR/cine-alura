import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favoritos from "./pages/Favoritos";
import Cabecera from "./components/Cabecera/Cabecera";
import Container from "./components/Container";
import Pie from "./components/Footer";
function AppRoutes(){
    return(
        <BrowserRouter>
            <Cabecera/>
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio/>}></Route>
                    <Route path="/favoritos" element={Favoritos}/>
                </Routes>
            </Container>
            <Pie>Hecho por Luis Fernando Vergara Ruiz</Pie>
        </BrowserRouter>
    );
}

export default AppRoutes