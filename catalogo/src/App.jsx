import estilos from './/App.module.css';
import { Cabecalho } from './components/Cabecalho';
import { NavBar } from './components/NavBar';
import { Content } from './components/Content';
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Cabecalho />
      <NavBar />
      <Content />
      <Footer />
    </>    
  )
}

export default App
