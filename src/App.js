// App.js

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css'; // Import custom styles


import HomePage from './components/HomePage';
import LivingRoomPage from './components/LivingRoomPage'; // Import LivingRoomPage component
import BedroomPage from './components/BedroomPage';
import KitchenPage from './components/KitchenPage';
import BathroomPage from './components/BathroomPage';
import OfficePage from './components/OfficePage';
import DiningPage from './components/DiningPage';
import OutdoorPage from './components/OutdoorPage';
import GaragePage from './components/GaragePage';
import Navbar from './components/Navbar'; // Import Navbar component
import Footer from './components/Footer'; // Import the Footer component




const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/living-room" element={<LivingRoomPage />} /> {/* Route for Living Room page */}
          <Route path="/bedroom" element={<BedroomPage />} /> {/* Route for Bedroom page */}
          <Route path="/kitchen" element={<KitchenPage />} /> {/* Route for Kitchen page */}
          <Route path="/bathroom" element={<BathroomPage />} /> {/* Route for Bathroom page */}
          <Route path="/office" element={<OfficePage />} /> {/* Route for Office page */}
          <Route path="/dining" element={<DiningPage />} /> {/* Route for Dining page */}
          <Route path="/outdoor" element={<OutdoorPage />} /> {/* Route for Outdoor page */}
          <Route path="/garage" element={<GaragePage />} /> {/* Route for Garage page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

