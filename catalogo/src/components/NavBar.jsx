import estilos from './NavBar.module.css';
import { Link } from 'react-router-dom';

export function NavBar(){
    return(
        <nav className={estilos.container}>
            <ul>
                <Link to='/'>
                <li>Home</li>
                </Link>

                <Link to='series'>
                <li>Series</li>
                </Link>

                <Link to='perfil'>
                <li>Perfil</li>
                </Link>
            </ul>
        </nav>
    )
}