import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';
import './CarsMuseum.css';

const CarsMuseum = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const cars = [
    // Audi
    { id: 1, name: 'Audi Quattro', year: '1984', category: 'Rally Car', price: '$85,000', special: 'Group B Legend', description: 'The original quattro that revolutionized rallying with its all-wheel-drive system.', image: 'https://www.carscoops.com/wp-content/uploads/2024/01/Audi-Sport-Quattro-1a.jpg' },
    { id: 2, name: 'Audi R8 V10', year: '2008', category: 'Supercar', price: '$120,000', special: 'First Generation', description: 'Audi\'s first modern supercar featuring a naturally aspirated V10 engine.', image: 'https://www.netcarshow.com/Audi-R8-2008-Front.31b9cc91.jpg' },
    
    // BMW
    { id: 3, name: 'BMW M3 E30', year: '1988', category: 'Sports Sedan', price: '$75,000', special: 'Original M3', description: 'The car that started the M3 legend, built for homologation purposes.', image: 'https://i.pinimg.com/736x/e3/49/78/e349780bb0e1af0f9f16a2137cf5b492.jpg' },
    { id: 4, name: 'BMW 2002 Turbo', year: '1974', category: 'Classic', price: '$95,000', special: 'First Turbo BMW', description: 'BMW\'s first turbocharged production car, extremely rare with only 1,672 made.', image: 'https://c4.wallpaperflare.com/wallpaper/7/449/169/auto-figure-bmw-machine-wallpaper-preview.jpg' },
    { id: 5, name: 'BMW i8', year: '2014', category: 'Hybrid Supercar', price: '$140,000', special: 'Future Classic', description: 'Revolutionary plug-in hybrid sports car with futuristic design.', image: 'https://cdn.bmwblog.com/wp-content/uploads/2014-bmw-i8-wallpapers-42.jpg' },
    
    // Porsche
    { id: 6, name: 'Porsche 911 Carrera', year: '1987', category: 'Sports Car', price: '$95,000', special: 'Restored', description: 'Classic 911 from the legendary G-series with perfect restoration.', image: 'https://c4.wallpaperflare.com/wallpaper/803/37/69/porsche-930-porsche-911-turbo-car-sports-car-white-cars-hd-wallpaper-preview.jpg' },
    { id: 7, name: 'Porsche 959', year: '1987', category: 'Supercar', price: '$1,500,000', special: 'Supercar Pioneer', description: 'Advanced all-wheel-drive supercar that was ahead of its time.', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F03%2F1987-porsche-959-komfort-rm-sothebys-auction-info-tw.jpg?w=1080&cbr=1&q=90&fit=max' },
    { id: 8, name: 'Porsche 356 Speedster', year: '1957', category: 'Classic', price: '$350,000', special: 'Iconic Design', description: 'The quintessential sports car that established Porsche\'s reputation.', image: 'https://w0.peakpx.com/wallpaper/226/656/HD-wallpaper-porsche-356-1953-retro-sports-car-silver-convertible-german-retro-cars-classic-car-porsche-thumbnail.jpg' },
    
    // Ferrari
    { id: 9, name: 'Ferrari F40', year: '1992', category: 'Supercar', price: '$1,200,000', special: 'Limited Edition', description: 'The last Ferrari personally approved by Enzo Ferrari himself.', image: 'https://www.thedrive.com/wp-content/uploads/2025/05/Broad-Arrow_1989-Ferrari-F40-Competizione_00.jpg?quality=85&w=1920' },
    { id: 10, name: 'Ferrari 250 GTO', year: '1962', category: 'Classic', price: '$45,000,000', special: 'Holy Grail', description: 'One of the most valuable and sought-after cars in the world.', image: 'https://www.wsupercars.com/thumbnails-wide/Ferrari/1962-Ferrari-250-GTO-001.jpg' },
    { id: 11, name: 'Ferrari Testarossa', year: '1986', category: 'Sports Car', price: '$180,000', special: '80s Icon', description: 'Iconic 1980s supercar famous for its distinctive side strakes.', image: 'https://w0.peakpx.com/wallpaper/356/442/HD-wallpaper-1984-ferrari-testarossa-coupe-flat-12-car-thumbnail.jpg' },
    
    // Mercedes-Benz
    { id: 12, name: 'Mercedes 300SL Gullwing', year: '1955', category: 'Classic', price: '$1,800,000', special: 'Gullwing Doors', description: 'Legendary sports car with iconic upward-opening doors.', image: 'https://w0.peakpx.com/wallpaper/607/153/HD-wallpaper-1955-mercedes-benz-300sl-gullwing-silver-classic-benz-1955.jpg' },
    { id: 13, name: 'Mercedes AMG GT', year: '2016', category: 'Sports Car', price: '$130,000', special: 'Modern Classic', description: 'Contemporary sports car carrying the AMG legacy forward.', image: 'https://c4.wallpaperflare.com/wallpaper/493/535/752/mercedes-benz-mercedes-amg-gt-car-green-car-wallpaper-preview.jpg' },
    { id: 14, name: 'Mercedes W124 500E', year: '1992', category: 'Sports Sedan', price: '$55,000', special: 'Porsche Built', description: 'High-performance sedan developed in collaboration with Porsche.', image: 'https://threehundredth.com/storage/2023/05/5474cbe3b5779_-_mercedes-benz500e-mbmedia-1-1024x768.jpg' },
    
    // Aston Martin
    { id: 15, name: 'Aston Martin DB5', year: '1964', category: 'Classic', price: '$850,000', special: 'James Bond Car', description: 'Iconic grand tourer made famous by the James Bond films.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcya8sTgm3ha_JR_m8u5HuLj9_rEYdym3bg&s' },
    { id: 16, name: 'Aston Martin Vantage', year: '2019', category: 'Sports Car', price: '$145,000', special: 'Modern British', description: 'Contemporary British sports car with stunning design and performance.', image: 'https://s.yimg.com/ny/api/res/1.2/.UmWKbEhEArGwlPPJhnhqw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/the_drive_634/630e263da89a7c8afc52dec43892c5e6' },
    
    // Ford
    { id: 17, name: 'Ford GT40', year: '1968', category: 'Race Car', price: '$3,500,000', special: 'Le Mans Winner', description: 'Legendary race car that dominated Le Mans in the 1960s.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yV7n49KKEh2ye_elzGCqgK-o6S4_2ToPLg&s' },
    { id: 18, name: 'Ford Mustang Shelby GT500', year: '1967', category: 'Muscle Car', price: '$195,000', special: 'Cobra Power', description: 'High-performance Mustang tuned by Carroll Shelby.', image: 'https://www.pcarmarket.com/static/media/uploads/7px6oyvwxubawlvd4cr52yopjrzs2ixg-2025-01-10-ZdyMBI0p/.thumbnails/Cover%20Photo%20Ratio.webp/Cover%20Photo%20Ratio-tiny-1200x0.webp' },
    { id: 19, name: 'Ford Escort RS Cosworth', year: '1992', category: 'Rally Car', price: '$85,000', special: 'Whale Tail', description: 'Iconic rally-bred hot hatch with distinctive rear spoiler.', image: 'https://images.squarespace-cdn.com/content/v1/6598c8e83ff0af0197ff19f9/1738291343111-BMZ2HYS0RVJG0W6XAPFX/Petersen-Ken-Block-1994-Ford-Escort-RS-Cosworth-Cossie-V2-38.jpg' },
    
    // Alfa Romeo
    { id: 20, name: 'Alfa Romeo 33 Stradale', year: '1967', category: 'Supercar', price: '$3,000,000', special: 'Beautiful Rare', description: 'One of the most beautiful cars ever made, only 18 were built.', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/1968_Alfa_Romeo_33_Stradale%2C_front_right_%28Miller%29.jpg' },
    { id: 21, name: 'Alfa Romeo Giulia Quadrifoglio', year: '2016', category: 'Sports Sedan', price: '$75,000', special: 'Racing Heritage', description: 'Modern high-performance sedan with racing DNA.', image: 'https://cdn.rmsothebys.com/c/0/8/5/1/a/c0851a47bdf6bd81504ac1e28cdb43a43d83e4d7.webp' },
    
    // Bentley
    { id: 22, name: 'Bentley Continental GT', year: '2003', category: 'Grand Tourer', price: '$35,000', special: 'Modern Luxury', description: 'Modern interpretation of classic British luxury and performance.', image: 'https://alkhobar.bentleymotors.com/picserver1/userdata/1/31596/3FAdVwEMPE/5_%20gt_mulliner_7rtv3%201400x700.jpg' },
    { id: 23, name: 'Bentley Speed Six', year: '1930', category: 'Vintage', price: '$2,500,000', special: 'Pre-War Legend', description: 'Legendary pre-war Bentley known for Le Mans victories.', image: 'https://media.goodingco.com/image/upload/c_fill,g_auto,q_88,w_1800/v1/Prod/PB23_Pebble%20Beach%20Auctions%202023/679_1930%20Bentley%20Speed%20Six%20Sports%20Saloon/1930_Bentley_Speed_Six_Sports_Saloon_62_tjyee1' },
    
    // Rolls-Royce
    { id: 24, name: 'Rolls-Royce Silver Shadow', year: '1974', category: 'Luxury', price: '$45,000', special: 'British Elegance', description: 'Epitome of British luxury and craftsmanship.', image: 'https://i.ytimg.com/vi/UcBX0ApOE2Y/sddefault.jpg' },
    { id: 25, name: 'Rolls-Royce Phantom', year: '2010', category: 'Luxury', price: '$350,000', special: 'Ultimate Luxury', description: 'The pinnacle of automotive luxury and refinement.', image: 'https://www.rolls-roycemotorcarsranchomirage.com/static/dealer-12176/2023-Rolls-Royce-Phantom-Series-II16.jpeg' },
    
    // Mini
    { id: 26, name: 'Mini Cooper S', year: '1965', category: 'Classic', price: '$25,000', special: 'Giant Killer', description: 'Small car with huge personality and racing success.', image: 'https://images.ctfassets.net/lmiyf1b7ib63/0minicoopers1966-image/b26b04338328894ca16531376a816f0a/0minicoopers1966-image.jpeg' },
    { id: 27, name: 'Mini John Cooper Works GP', year: '2020', category: 'Hot Hatch', price: '$45,000', special: 'Track Focused', description: 'Most extreme Mini ever made for track enthusiasts.', image: 'https://img.autocarindia.com/ExtraImages/20170906054605_minigp-concept-front.jpg?w=700&c=1' },
    
    // Alpina
    { id: 28, name: 'Alpina B7 Turbo', year: '1985', category: 'Sports Sedan', price: '$65,000', special: 'Alpina Tuned', description: 'Hand-built BMW tuned by Alpina for ultimate performance.', image: 'https://www.carscoops.com/wp-content/uploads/2022/11/1986-Alpina-B7-Turbo-Coupe-10-1.jpg' },
    
    // Apollo
    { id: 29, name: 'Apollo IE', year: '2018', category: 'Hypercar', price: '$2,700,000', special: 'Track Monster', description: 'Extreme track-focused hypercar with aggressive aerodynamics.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop' },
    
    // Lincoln
    { id: 30, name: 'Lincoln Continental Mark IV', year: '1972', category: 'Luxury', price: '$35,000', special: 'American Luxury', description: 'Classic American luxury car from the golden era.', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop' }
  ];

  const categories = ['All', 'Classic', 'Sports Car', 'Supercar', 'Luxury', 'Rally Car', 'Sports Sedan', 'Race Car', 'Muscle Car', 'Hot Hatch', 'Grand Tourer', 'Vintage', 'Hypercar', 'Hybrid Supercar'];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         car.year.includes(searchTerm) ||
                         car.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="cars-museum">
      <section className="museum-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cars Museum Collection
          </motion.h2>
          
          {/* Filters */}
          <div className="filters">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="category-filter">
              <FaFilter className="filter-icon" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="cars-grid">
            {filteredCars.map((car, index) => (
              <motion.div 
                key={car.id}
                className="car-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                  <div className="car-overlay">
                    <span className="special-badge" >{car.special}</span>
                  </div>
                </div>
                <div className="car-info">
                  <h3 className="car-name">{car.name}</h3>
                  <p className="car-year">{car.year}</p>
                  <p className="car-category">{car.category}</p>
                  <p className="car-description">{car.description}</p>
                  <div className="car-price">{car.price}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No cars found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CarsMuseum;
