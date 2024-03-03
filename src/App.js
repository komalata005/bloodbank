import React from 'react';
import './App.css';
import Header from './components/Header';
import logo from './logo.svg';
import { Footer } from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Header />
        <Features />
      <Footer />
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Hello, Tailwind CSS!</h1>
      <p className="text-center mt-2 text-gray-600">Welcome to my React app with Tailwind CSS.</p>
    </div>
    </div>
  );
}

export default App;
