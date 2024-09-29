import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Anime from './pages/Anime/Anime';
import Header from "./components/Header/Header";
import Error from "./pages/Error/Error";
import { Favoritos } from "./pages/Favoritos/Favoritos";



export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime/:id" element={<Anime />} />
                <Route path="/favoritos" element={<Favoritos />} />





                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}