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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/host/:id" element={<Host />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
