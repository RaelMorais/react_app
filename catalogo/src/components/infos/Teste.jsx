import estilos from './teste.module.css'

export function Teste() {
    return (
      <input
        type="text"
        className={estilos.input}
        placeholder="text"
      />
    );
  }