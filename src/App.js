import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CarsMuseum from './pages/CarsMuseum';
import Login from './pages/Login';
import './App.css';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cars-museum" element={<CarsMuseum />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
