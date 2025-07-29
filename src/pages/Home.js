import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCar, FaUsers, FaTrophy, FaGlobe } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const stats = [
    { icon: <FaCar />, number: '500+', label: 'Classic Cars' },
    { icon: <FaUsers />, number: '50K+', label: 'Visitors' },
    { icon: <FaTrophy />, number: '100+', label: 'Awards' },
    { icon: <FaGlobe />, number: '25+', label: 'Countries' }
  ];

  const featuredCars = [
    {
      id: 1,
      name: 'Ferrari F40',
      year: '1992',
      category: 'Supercar',
      price: '$1,200,000',
      special: 'Limited Edition',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Porsche 911 Carrera',
      year: '1987',
      category: 'Sports Car',
      price: '$95,000',
      special: 'Restored',
      image: 'https://www.classicdriver.com/sites/default/files/article_images/porsche_911_carrera_cs_1_0.jpg'
    },
    {
      id: 3,
      name: 'BMW M3 E30',
      year: '1990',
      category: 'Sports Sedan',
      price: '$75,000',
      special: 'Original Paint',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Welcome to Classic Car Museum
              </motion.h1>
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Discover the finest collection of classic and vintage automobiles from around the world
              </motion.p>
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <Link to="/cars-museum" className="btn-primary">
                  Explore Collection
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="featured-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Cars
          </motion.h2>
          <div className="featured-grid">
            {featuredCars.map((car, index) => (
              <motion.div 
                key={car.id}
                className="featured-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                  <div className="car-overlay">
                    <span className="special-badge">{car.special}</span>
                  </div>
                </div>
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p className="car-year">{car.year}</p>
                  <p className="car-category">{car.category}</p>
                  <p className="car-price">{car.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="featured-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/cars-museum" className="btn-primary">
              View All Cars
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Experience History?</h2>
            <p>Book your visit today and immerse yourself in the golden age of automotive engineering</p>
            <Link to="/login" className="btn-primary">
              Book Your Visit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
