import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favoritos from "./pages/Favoritos";
import Cabecera from "./components/Cabecera/Cabecera";
import Container from "components/Container";
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
        </BrowserRouter>
    );
}

export default AppRoutes