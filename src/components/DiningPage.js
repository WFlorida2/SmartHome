import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const DiningPage = () => {
    // State variables and toggle functions for each device
    const [chandelierOn, setChandelierOn] = useState(false);
    const toggleChandelier = () => {
        setChandelierOn(!chandelierOn);
    };

    const [stretchCeilingLightsOn, setStretchCeilingLightsOn] = useState(false);
    const toggleStretchCeilingLights = () => {
        setStretchCeilingLightsOn(!stretchCeilingLightsOn);
    };

    const [diningTableLightsOn, setDiningTableLightsOn] = useState(false);
    const toggleDiningTableLights = () => {
        setDiningTableLightsOn(!diningTableLightsOn);
    };

    // Button width based on device state
    const chandelierButtonWidth = chandelierOn ? 'auto' : 'min-content';
    const stretchCeilingLightsButtonWidth = stretchCeilingLightsOn ? 'auto' : 'min-content';
    const diningTableLightsButtonWidth = diningTableLightsOn ? 'auto' : 'min-content';

    return (
        <div className="container">
            <h1 className="text-center" style={{ color: "goldenrod" }}>Lights Control</h1>
            <hr style={{ borderTop: '3px solid goldenrod' }} />
            <h2 className="text-center">Dining Room</h2>
            <hr style={{ borderTop: '1px solid #ccc' }} />
            <ul className="device-list">
                {/* Chandelier */}
                <li className="device-item" style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{ marginRight: '10px', color: chandelierOn ? 'goldenrod' : 'darkgrey' }}
                        />
                        {chandelierOn && <span style={{ marginRight: '5px' }}>Is On</span>}
                        {!chandelierOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
                        <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Chandelier</span>
                    </div>
                    <button
                        className="toggle-button"
                        style={{
                            flexBasis: '20%',
                            minWidth: chandelierButtonWidth,
                            backgroundColor: chandelierOn ? 'red' : 'green'
                        }}
                        onClick={toggleChandelier}
                    >
                        <span style={{ textDecoration: chandelierOn ? 'none' : 'underline', color: 'white' }}>
                            Turn {chandelierOn ? 'Off' : 'On'}
                        </span>
                    </button>
                </li>

                {/* Stretch Ceiling Lights */}
                <li className="device-item" style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{ marginRight: '10px', color: stretchCeilingLightsOn ? 'goldenrod' : 'darkgrey' }}
                        />
                        {stretchCeilingLightsOn && <span style={{ marginRight: '5px' }}>Is On</span>}
                        {!stretchCeilingLightsOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
                        <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Stretch Ceiling Lights</span>
                    </div>
                    <button
                        className="toggle-button"
                        style={{
                            flexBasis: '20%',
                            minWidth: stretchCeilingLightsButtonWidth,
                            backgroundColor: stretchCeilingLightsOn ? 'red' : 'green'
                        }}
                        onClick={toggleStretchCeilingLights}
                    >
                        <span style={{ textDecoration: stretchCeilingLightsOn ? 'none' : 'underline', color: 'white' }}>
                            Turn {stretchCeilingLightsOn ? 'Off' : 'On'}
                        </span>
                    </button>
                </li>

                {/* Dining Table Lights */}
                <li className="device-item" style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{ marginRight: '10px', color: diningTableLightsOn ? 'goldenrod' : 'darkgrey' }}
                        />
                        {diningTableLightsOn && <span style={{ marginRight: '5px' }}>Is On</span>}
                        {!diningTableLightsOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
                        <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Dining Table Lights</span>
                    </div>
                    <button
                        className="toggle-button"
                        style={{
                            flexBasis: '20%',
                            minWidth: diningTableLightsButtonWidth,
                            backgroundColor: diningTableLightsOn ? 'red' : 'green'
                        }}
                        onClick={toggleDiningTableLights}
                    >
                        <span style={{ textDecoration: diningTableLightsOn ? 'none' : 'underline', color: 'white' }}>
                            Turn {diningTableLightsOn ? 'Off' : 'On'}
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default DiningPage;
