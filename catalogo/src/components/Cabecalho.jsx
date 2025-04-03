// Estrutura básica para os componentes 
import estilos from './Cabecalho.module.css';
export function Cabecalho(){
    return(
        <header className={estilos.container}>
            <p>Direto do <span>cinema</span> para sua <span>casa</span></p>
        </header>
    )
}