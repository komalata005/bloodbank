import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <>
    {/* <h1 className="text-3xl font-bold text-red-700 underline">
      Hello world!
    </h1> */}
    <img src='../header.svg' alt='' className='' height={391} width={1440} />
    <Header />
    <Features />
    <Footer />
    </>
  );
}

export default App;
