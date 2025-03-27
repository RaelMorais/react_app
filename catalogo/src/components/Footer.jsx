import estilos from './Footer.module.css';
import img from '../assets/img/img.jpg'
export function Footer() {
  return (
    <>
      <footer className={estilos.container}>
      <i class="fa-solid fa-circle-user"></i>            
      <h1>Texto centralizado</h1>
      <div className="container_icons">
            <img src={img} alt="Imagem do rodapé" />      
      </div>
    
      </footer>
    </>
  );
}
