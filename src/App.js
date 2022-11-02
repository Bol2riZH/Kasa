import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './style/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Host from './pages/Host';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home title="Kasa - accueil" />} />
      <Route path="/about" element={<About title="Kasa - à propos" />} />
      <Route path="/host/:id" element={<Host title="Kasa - logement" />} />
      <Route path="*" element={<Error404 title="Erreur 404" />} />
    </Routes>
  );
};

export default App;
