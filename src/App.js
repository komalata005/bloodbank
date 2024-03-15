import React from 'react';
import './styles/main.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Loginas from './pages/login/loginas';
import LoginDonar from './pages/login/donar';
import LoginPatient from './pages/login/patient';
import RegistrationDonar from './pages/registration/donar';
import RegistrationPatient from './pages/registration/patient';
import WelcomeDonar from './pages/welcome/donar';
import WelcomePatient from './pages/welcome/patient';
import ContactUs from './pages/contactus';
import About from './pages/about';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// Import other components here

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login-as" element={<Loginas />}></Route>
        <Route path="/login/donar" element={<LoginDonar />}></Route>
        <Route path="/login/patient" element={<LoginPatient />}></Route>
        <Route path="/registration/donar" element={<RegistrationDonar />}></Route>
        <Route path="/registration/patient" element={<RegistrationPatient />}></Route>
        <Route path="/welcome/donar" element={<WelcomeDonar />}></Route>
        <Route path="/welcome/patient" element={<WelcomePatient />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
