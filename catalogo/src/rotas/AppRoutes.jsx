// import {Lista } from '../components/Lista';
import { Inicial } from "../pages/Inicial";
import { Series } from "../pages/series";
import { Perfil } from "../pages/perfil";
import { Content } from '../components/Content';


import { Routes as RouterRoutes, Route } from 'react-router-dom'; // Alias para evitar conflito


export function AppRoutes() {
    return(
        <RouterRoutes>  {/* Usando RouterRoutes para evitar conflito */}
            <Route path='/' element={< Inicial />} >
            <Route index element={< Content />} />
            <Route path="perfil" element={< Perfil />} />
            <Route path="series" element={< Series />} />
            </Route>
        </RouterRoutes>
    );
}
