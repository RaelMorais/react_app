import estilos from './NavBar.module.css';


export function NavBar(){
    return(
        <nav className={estilos.container}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Tv</li>
                <li>Series</li>
            </ul>
        </nav>
    )
}