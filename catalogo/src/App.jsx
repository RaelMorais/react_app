// import estilos from './/App.module.css';
// import { Cabecalho } from './components/Cabecalho';
// import { NavBar } from './components/NavBar';
// import { Content } from './components/Content';
// import { Footer } from './components/Footer'
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './rotas/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App
