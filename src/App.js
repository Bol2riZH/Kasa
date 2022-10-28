import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './style/main.scss';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Host from './pages/Host';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/host/:id" element={<Host />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
