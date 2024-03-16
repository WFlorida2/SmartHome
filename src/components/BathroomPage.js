import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const BathroomPage = () => {
  // State variables and toggle functions for each device
  const [bathLightsOn, setBathLightsOn] = useState(false);
  const toggleBathLights = () => {
    setBathLightsOn(!bathLightsOn);
  };

  const [showerLightsOn, setShowerLightsOn] = useState(false);
  const toggleShowerLights = () => {
    setShowerLightsOn(!showerLightsOn);
  };

  const [saunaLightsOn, setSaunaLightsOn] = useState(false);
  const toggleSaunaLights = () => {
    setSaunaLightsOn(!saunaLightsOn);
  };

  // Button width based on device state
  const bathLightsButtonWidth = bathLightsOn ? 'auto' : 'min-content';
  const showerLightsButtonWidth = showerLightsOn ? 'auto' : 'min-content';
  const saunaLightsButtonWidth = saunaLightsOn ? 'auto' : 'min-content';

  return (
    <div className="container">
      <h1 className="text-center" style={{ color: "goldenrod" }}>Lights Control</h1>
      <hr style={{ borderTop: '3px solid goldenrod' }} />
      <h2 className="text-center">Bathroom</h2>
      <hr style={{ borderTop: '1px solid #ccc' }} />
      <ul className="device-list">
        {/* Bath Lights */}
        <li
          className="device-item"
          style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faLightbulb}
              style={{ marginRight: '10px', color: bathLightsOn ? 'goldenrod' : 'darkgrey' }}
            />
            {bathLightsOn && <span style={{ marginRight: '5px' }}>Is On</span>}
            {!bathLightsOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
            <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Bath Lights</span>
          </div>
          <button
            className="toggle-button"
            style={{ flexBasis: '20%', minWidth: bathLightsButtonWidth, backgroundColor: bathLightsOn ? 'red' : 'green' }}
            onClick={toggleBathLights}
          >
            <span style={{ textDecoration: bathLightsOn ? 'none' : 'underline', color: 'white' }}>
              Turn {bathLightsOn ? 'Off' : 'On'}
            </span>
          </button>
        </li>
        
        {/* Shower Lights */}
        <li
          className="device-item"
          style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faLightbulb}
              style={{ marginRight: '10px', color: showerLightsOn ? 'goldenrod' : 'darkgrey' }}
            />
            {showerLightsOn && <span style={{ marginRight: '5px' }}>Is On</span>}
            {!showerLightsOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
            <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Shower Lights</span>
          </div>
          <button
            className="toggle-button"
            style={{ flexBasis: '20%', minWidth: showerLightsButtonWidth, backgroundColor: showerLightsOn ? 'red' : 'green' }}
            onClick={toggleShowerLights}
          >
            <span style={{ textDecoration: showerLightsOn ? 'none' : 'underline', color: 'white' }}>
              Turn {showerLightsOn ? 'Off' : 'On'}
            </span>
          </button>
        </li>
        
        {/* Sauna Lights */}
        <li
          className="device-item"
          style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faLightbulb}
              style={{ marginRight: '10px', color: saunaLightsOn ? 'goldenrod' : 'darkgrey' }}
            />
            {saunaLightsOn && <span style={{ marginRight: '5px' }}>Is On</span>}
            {!saunaLightsOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
            <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Sauna Lights</span>
          </div>
          <button
            className="toggle-button"
            style={{ flexBasis: '20%', minWidth: saunaLightsButtonWidth, backgroundColor: saunaLightsOn ? 'red' : 'green' }}
            onClick={toggleSaunaLights}
          >
            <span style={{ textDecoration: saunaLightsOn ? 'none' : 'underline', color: 'white' }}>
              Turn {saunaLightsOn ? 'Off' : 'On'}
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BathroomPage;

