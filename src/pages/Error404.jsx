import React from 'react';

import classes from './Error404.module.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import useDocumentTitle from '../hook/useDocumentTitle';

const Error404 = ({ title }) => {
  useDocumentTitle(title);

  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate('/');
  };

  return (
    <div className={classes.content}>
      <div className={classes.contentCenter}>
        <Header />
        <section className={classes.container}>
          <h2>404</h2>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <button onClick={goHomeHandler}>
            Retournez sur la page d'accueil
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
