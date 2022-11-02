import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, redirect } from 'react-router-dom';

import data from '../api/hosts.json';

import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Rate from '../components/Rate';
import CollapseCard from '../components/CollapseCard';

import classes from './Host.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import useDocumentTitle from '../hook/useDocumentTitle';

const Host = ({ title }) => {
  useDocumentTitle(title);
  const params = useParams();
  const [host, setHost] = useState(data.find((host) => host.id === params.id));

  // const navigate = useNavigate();
  //
  // console.log(host.title);
  //
  // useEffect(() => {
  //   !host.title && redirect('/home');
  // }, [host]);

  return (
    <div className={classes.content}>
      <div className={classes.contentCenter}>
        <Header />
        <section className={classes.main}>
          <ul>
            <Carousel {...host} />
          </ul>
          <header className={classes.header}>
            <div className={classes.topContainer}>
              <h2>{host.title}</h2>
              <p>{host.location}</p>
              <Tag {...host} />
            </div>
            <div className={classes.middleContainer}>
              <Rate {...host} />
              <div className={classes.hostInfo}>
                <span>{host.host.name}</span>
                <img src={host.host.picture} alt="host person" />
              </div>
            </div>
          </header>
          <section className={classes.bottomContainer}>
            <CollapseCard>{host.description}</CollapseCard>
            <CollapseCard>{host.equipments}</CollapseCard>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Host;
