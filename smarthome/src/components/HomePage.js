import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/images/SmartHome.png'; // Import logo image

import RoomCard from './RoomCard';

const HomePage = () => {
  return (
    <div>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="rooms" role="tabpanel">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="mx-auto d-block" style={{ width: '30%' }} /> {/* Adjust width of the logo */}
            <h2 className="text-center">Rooms & Spaces</h2>
            <div className="row">
              <div className="col">
                <Link to="/living-room">
                  <RoomCard title="Living Room" />
                </Link>
              </div>
              <div className="col">
                <Link to="/bedroom">
                  <RoomCard title="Bedroom" />
                </Link>
              </div>
              <div className="col">
                <Link to="/kitchen">
                  <RoomCard title="Kitchen" />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="/bathroom">
                  <RoomCard title="Bathroom" />
                </Link>
              </div>
              <div className="col">
                <Link to="/office">
                  <RoomCard title="Office" />
                </Link>
              </div>
              <div className="col">
                <Link to="/dining">
                  <RoomCard title="Dining Room" />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="/garage">
                  <RoomCard title="Garage" />
                </Link>
              </div>
              <div className="col">
                <Link to="/outdoor">
                  <RoomCard title="Outdoor" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;





