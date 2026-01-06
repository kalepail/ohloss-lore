import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Characters from './pages/Characters';
import CharacterDetail from './pages/CharacterDetail';
import Factions from './pages/Factions';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lore" element={<Lore />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<CharacterDetail />} />
          <Route path="factions" element={<Factions />} />
          <Route path="guides" element={<Guides />} />
          <Route path="guides/:id" element={<GuideDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
