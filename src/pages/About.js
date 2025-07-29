import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.p 
            className="about-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At Classic Car Museum, we are dedicated to bringing the rich history of automotive design and engineering to life. Our museum boasts a collection of over 500 classic and vintage cars from around the world. Each car in our collection is a testament to the artistry and ingenuity of automotive pioneers.
          </motion.p>
          <motion.p 
            className="about-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Whether you're an avid car collector, a motoring enthusiast, or a family looking for a fun and educational day out, our museum offers something for everyone. We invite you to explore our exhibits, participate in interactive displays, and immerse yourself in the golden age of motoring. At Classic Car Museum, we are dedicated to bringing the rich history of automotive design and engineering to life. Our museum boasts a collection of over 500 classic and vintage cars from around the world. Each car in our collection is a testament to the artistry and ingenuity of automotive pioneers.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default About;
