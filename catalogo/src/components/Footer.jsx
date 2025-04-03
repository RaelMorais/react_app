import estilos from './Footer.module.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer className={estilos.container}>
        <div className={estilos.container_main}>
        <div className={estilos.container_icons}>
          {/* <img src={img} alt="Imagem do rodapé" /> */}
          <FaInstagram className={`${estilos.icon} ${estilos.instagram}`} />
          <FaGithub className={`${estilos.icon} ${estilos.github}`} />
          <FaLinkedin className={`${estilos.icon} ${estilos.linkedin}`} />
        </div>
        <div className={estilos.container_infos}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Repository</li>
              <li>Our Company</li>
            </ul>
        </div>
        </div>
        <div className={estilos.container_copy}>
            <div className={estilos.copy}>
                <p>Israel Santana © 2025</p>
            </div>
        </div>

      </footer>
    </>
  );
}
