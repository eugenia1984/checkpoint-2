import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { RickAndMorty } from './pages/RickAndMorty';
import { FormularioDeContacto } from './pages/FormularioDeContacto';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    < >
    <Header brand="CheckPoint #2"/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/rickandmorty" element={<RickAndMorty />} />
        <Route path="/formulariodecontacto" element={<FormularioDeContacto />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
