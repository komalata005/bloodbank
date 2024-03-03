import React from 'react';
import './App.css';
import Header from './components/Header';
import logo from './logo.svg';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header> */}
      <Header />
      <body>
      <h1>komal</h1>
      </body>
      <Footer />
    </div>
  );
}

export default App;
