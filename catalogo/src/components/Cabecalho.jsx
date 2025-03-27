// Estrutura básica para os componentes 
import estilos from './Cabecalho.module.css'
export function Cabecalho(){
    return(
        <header className={estilos.container}>
            <h1>FerFlix</h1>
            <h3>O melhor cátalogo de filmes</h3>
        </header>
    )
}