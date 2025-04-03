import estilos from './Content.module.css';
import { Card } from './Card';
import { Lista } from './Lista';

export function Content(){
    return(
        <main className={estilos.container}>
            <h1>Conteudo aqui!</h1>
            <Lista>
                
            </Lista>
        </main>
    )
}