import React from 'react';
import './styles/main.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Loginas from './pages/login/loginas';
import LoginDonar from './pages/login/donar';

// Import other components here

function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login-as" element={<Loginas />}></Route>
        <Route path="/login/donar" element={<LoginDonar />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
