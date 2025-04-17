import estilos from './series.module.css';
import { Serie } from '../components/Serie';
export function Series(){
    return(
        <>
        <main className={estilos.container}>
            <h2>
                Meu contéudo 
            </h2>
            <div className={estilos.divContainer}>

            <Serie></Serie>

            </div>
        </main>
        </>
    );
}