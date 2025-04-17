import estilos from './perfil.module.css';
// import { BotaoPerfil } from '../components/botoes/BotaoPerfil';
// Importar estilos: estilos.(Nome do estilo/variavel que está no CSS);
export function Perfil(){
    return(
        <>
        <main className={estilos.container}> 
            <h2>
                Perfil
       
            </h2>
            <div className={estilos.containerMain}>
                <div className={estilos.perfil}>
                </div>
            </div>
        </main>
        </>
    );
}

