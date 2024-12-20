import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contato from './Components/Contato';
import './App.css';
import Produto from './Components/Produto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
