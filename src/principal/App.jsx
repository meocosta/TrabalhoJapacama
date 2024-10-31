import './padrão.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Galeria from '../pages/Galeria';
import Conteúdo from '../pages/Conteudo';
import Envolvidos from '../pages/Envolvidos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/conteudo" element={<Conteúdo />} />
          <Route path="/envolvidos" element={<Envolvidos />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App