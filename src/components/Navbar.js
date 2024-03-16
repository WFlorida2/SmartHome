// Import React, useState, and useEffect from the 'react' library
import React, { useState, useEffect } from 'react';
// Import Link from 'react-router-dom' to enable navigation
import { Link } from 'react-router-dom';

// Define the Navbar component
const Navbar = () => {
  // Initialize state variable currentDateTime and its setter setCurrentDateTime using useState
  const [currentDateTime, setCurrentDateTime] = useState('');

  // useEffect hook to update the current date and time every second
  useEffect(() => {
    // Define the updateDateTime function to update the current date and time
    const updateDateTime = () => {
      // Get the current date and time in the desired format
      const currentDate = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); // Include seconds
      // Set the current date and time in state
      setCurrentDateTime(`${currentDate}, ${currentTime}`);
    };

    // Call updateDateTime initially to set the current date and time
    updateDateTime();

    // Set up an interval to update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once after initial render

  // Render the navbar component
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'goldenrod', color: 'black' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Render a link to the home page */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {/* Render a dropdown menu for selecting a room */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                Select a room
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: 'goldenrod' }}>
                {/* Render links to different room pages */}
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
          {/* Render the current date and time */}
          <div className="current-datetime" style={{ color: 'black' }}>
            {currentDateTime}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export the Navbar component
export default Navbar;










