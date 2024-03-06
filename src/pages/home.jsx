import React from 'react';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <>
      <section id="home">
        <Navigation />
        <Features id="about" />
        <Footer />
      </section>
    </>
  );
};

export default Home;
