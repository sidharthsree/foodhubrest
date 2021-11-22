import React from 'react';
import Directory from './../../components/Directory';
import Footer from './../../components/Footer'
import './styles.scss';

const Homepage = props => {
  return (
    <section className="homepage">
      <Directory />
      <Footer/>
    </section>
  );
};

export default Homepage;