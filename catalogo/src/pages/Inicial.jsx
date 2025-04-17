import { NavBar } from '../components/NavBar';
import { Cabecalho } from '../components/Cabecalho';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

export function Inicial(){
    return(
        <>
         <Cabecalho />
        <NavBar />
       
        <Outlet />
        <Footer />
        </>
    )
}