import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); // Include seconds
      setCurrentDateTime(`${currentDate}, ${currentTime}`);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'goldenrod', color: 'black' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                Select a room
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: 'goldenrod' }}>
                <li><Link className="dropdown-item" to="/living-room" style={{ color: 'black' }}>Living Room</Link></li>
                <li><Link className="dropdown-item" to="/bedroom" style={{ color: 'black' }}>Bedroom</Link></li>
                <li><Link className="dropdown-item" to="/kitchen" style={{ color: 'black' }}>Kitchen</Link></li>
                <li><Link className="dropdown-item" to="/bathroom" style={{ color: 'black' }}>Bathroom</Link></li>
                <li><Link className="dropdown-item" to="/office" style={{ color: 'black' }}>Office</Link></li>
                <li><Link className="dropdown-item" to="/dining" style={{ color: 'black' }}>Dining Room</Link></li>
                <li><Link className="dropdown-item" to="/outdoor" style={{ color: 'black' }}>Outdoor</Link></li>
                <li><Link className="dropdown-item" to="/garage" style={{ color: 'black' }}>Garage</Link></li>
              </ul>
            </li>
          </ul>
          <div className="current-datetime" style={{ color: 'black' }}>
            {currentDateTime}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









