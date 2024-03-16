import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const BedroomPage = () => {
    // State variables and toggle functions for each device
    const [ceilingLightOn, setCeilingLightOn] = useState(false);
    const toggleCeilingLight = () => {
        setCeilingLightOn(!ceilingLightOn);
    };

    const [bedsideLampLeftOn, setBedsideLampLeftOn] = useState(false);
    const toggleBedsideLampLeft = () => {
        setBedsideLampLeftOn(!bedsideLampLeftOn);
    };

    const [bedsideLampRightOn, setBedsideLampRightOn] = useState(false);
    const toggleBedsideLampRight = () => {
        setBedsideLampRightOn(!bedsideLampRightOn);
    };

    const [readingLampOn, setReadingLampOn] = useState(false);
    const toggleReadingLamp = () => {
        setReadingLampOn(!readingLampOn);
    };

    // Button width based on device state
    const ceilingLightButtonWidth = ceilingLightOn ? 'auto' : 'min-content';
    const bedsideLampLeftButtonWidth = bedsideLampLeftOn ? 'auto' : 'min-content';
    const bedsideLampRightButtonWidth = bedsideLampRightOn ? 'auto' : 'min-content';
    const readingLampButtonWidth = readingLampOn ? 'auto' : 'min-content';

    return (
        <div className="container">
        <h1 className="text-center" style={{ color: "goldenrod" }}>Lights Control</h1>
        <hr style={{ borderTop: '3px solid goldenrod' }} />
        <h2 className="text-center">Bedroom</h2>
        <hr style={{ borderTop: '1px solid #ccc' }} />
        <ul className="device-list">
            {/* Ceiling Light */}
            <li
            className="device-item"
            style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}
            >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon
                icon={faLightbulb}
                style={{ marginRight: '10px', color: ceilingLightOn ? 'goldenrod' : 'darkgrey' }}
                />
                {ceilingLightOn && <span style={{ marginRight: '5px' }}>Is On</span>}
                {!ceilingLightOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
                <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Ceiling Light</span>
            </div>
            <button
                className="toggle-button"
                style={{
                flexBasis: '20%',
                minWidth: ceilingLightButtonWidth,
                backgroundColor: ceilingLightOn ? 'red' : 'green',
                }}
                onClick={toggleCeilingLight}
            >
                <span
                style={{
                    textDecoration: ceilingLightOn ? 'none' : 'underline',
                    color: 'white',
                }}
                >
                Turn {ceilingLightOn ? 'Off' : 'On'}
                </span>
            </button>
            </li>

            {/* Bedside Lamp Left */}
            <li
            className="device-item"
            style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}
            >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon
                icon={faLightbulb}
                style={{ marginRight: '10px', color: bedsideLampLeftOn ? 'goldenrod' : 'darkgrey' }}
                />
                {bedsideLampLeftOn && <span style={{ marginRight: '5px' }}>Is On</span>}
                {!bedsideLampLeftOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
                <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Bedside Lamp Left</span>
            </div>
            <button
                className="toggle-button"
                style={{
                flexBasis: '20%',
                minWidth: bedsideLampLeftButtonWidth,
                backgroundColor: bedsideLampLeftOn ? 'red' : 'green',
                }}
                onClick={toggleBedsideLampLeft}
            >
                <span
                style={{
                    textDecoration: bedsideLampLeftOn ? 'none' : 'underline',
                    color: 'white',
                }}
                >
                Turn {bedsideLampLeftOn ? 'Off' : 'On'}
                </span>
            </button>
            </li>

            {/* Bedside Lamp Right */}
            <li
            className="device-item"
            style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}
            >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon
                icon={faLightbulb}
                style={{ marginRight: '10px', color: bedsideLampRightOn ? 'goldenrod' : 'darkgrey' }}
                />
                {bedsideLampRightOn && <span style={{ marginRight: '5px' }}>Is On</span>}
                {!bedsideLampRightOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
                <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Bedside Lamp Right</span>
            </div>
            <button
                className="toggle-button"
                style={{
                flexBasis: '20%',
                minWidth: bedsideLampRightButtonWidth,
                backgroundColor: bedsideLampRightOn ? 'red' : 'green',
                }}
                onClick={toggleBedsideLampRight}
            >
                <span
                style={{
                    textDecoration: bedsideLampRightOn ? 'none' : 'underline',
                    color: 'white',
                }}
                >
                Turn {bedsideLampRightOn ? 'Off' : 'On'}
                </span>
            </button>
            </li>

            {/* Reading Lamp */}
            <li
            className="device-item"
            style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}
            >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon
                icon={faLightbulb}
                style={{ marginRight: '10px', color: readingLampOn ? 'goldenrod' : 'darkgrey' }}
                />
                {readingLampOn && <span style={{ marginRight: '5px' }}>Is On</span>}
                {!readingLampOn && <span style={{ marginRight: '5px' }}>Is Off</span>}
                <span className="label" style={{ marginLeft: '10px', flexBasis: '50%' }}>Reading Lamp</span>
            </div>
            <button
                className="toggle-button"
                style={{
                flexBasis: '20%',
                minWidth: readingLampButtonWidth,
                backgroundColor: readingLampOn ? 'red' : 'green',
                }}
                onClick={toggleReadingLamp}
            >
                <span
                style={{
                    textDecoration: readingLampOn ? 'none' : 'underline',
                    color: 'white',
                }}
                >
                Turn {readingLampOn ? 'Off' : 'On'}
                </span>
            </button>
            </li>

            {/* Master Switch */}
            <li
            className="device-item"
            style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)' }}
            >
            <button
                className="master-switch"
                style={{
                flexBasis: '20%',
                minWidth: 'min-content',
                backgroundColor: 'goldenrod',
                }}
                onClick={() => {
                setCeilingLightOn(false);
                setBedsideLampLeftOn(false);
                setBedsideLampRightOn(false);
                setReadingLampOn(false);
                }}
            >
                Turn Off All Lights
            </button>
            </li>
        </ul>
        </div>
    );
};

export default BedroomPage;








