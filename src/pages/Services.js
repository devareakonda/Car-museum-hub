import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarCheck, FaUserTie, FaCamera, FaBirthdayCake, FaGraduationCap, FaUsers } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCalendarCheck />,
      title: 'Guided Tours',
      description: 'Expert-led tours through our extensive collection with detailed history and technical insights.',
      price: '$25'
    },
    {
      icon: <FaUserTie />,
      title: 'Private Tours',
      description: 'Personalized private tours for individuals or small groups with dedicated guides.',
      price: '$100'
    },
    {
      icon: <FaCamera />,
      title: 'Photography Sessions',
      description: 'Professional photography sessions with classic cars for special occasions.',
      price: '$150'
    },
    {
      icon: <FaBirthdayCake />,
      title: 'Event Hosting',
      description: 'Host your special events, weddings, or corporate functions in our unique venue.',
      price: '$500'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Educational Programs',
      description: 'School visits and educational workshops for students and automotive enthusiasts.',
      price: '$15'
    },
    {
      icon: <FaUsers />,
      title: 'Group Packages',
      description: 'Special packages for large groups with discounted rates and exclusive access.',
      price: '$20'
    }
  ];

  return (
    <div className="services">
      <section className="services-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-price">Starting at {service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
