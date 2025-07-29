import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCar, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">
              <FaCar className="logo-icon" />
              <span className="logo-text">Classic Car Museum</span>
            </Link>
          </motion.div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <motion.li whileHover={{ y: -2 }}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </motion.li>
              <motion.li whileHover={{ y: -2 }}>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              </motion.li>
              <motion.li whileHover={{ y: -2 }}>
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
              </motion.li>
              <motion.li whileHover={{ y: -2 }}>
                <Link to="/cars-museum" onClick={() => setIsMenuOpen(false)}>Cars Museum</Link>
              </motion.li>
              <motion.li whileHover={{ y: -2 }}>
                <Link to="/login" className="login-btn" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </motion.li>
            </ul>
          </nav>

          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
