import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const GaragePage = () => {
    // State variables and toggle function for ceiling lights
    const [ceilingLightsOn, setCeilingLightsOn] = useState(false);
    const toggleCeilingLights = () => {
        setCeilingLightsOn(!ceilingLightsOn);
    };

    // Button width based on ceiling lights state
    const ceilingLightsButtonWidth = ceilingLightsOn ? "auto" : "min-content";

    return (
        <div className="container">
            <h1 className="text-center" style={{ color: "goldenrod" }}>Lights Control</h1>
            <hr style={{ borderTop: "3px solid goldenrod" }} />
            <h1 className="text-center" style={{ color: "goldenrod" }}>Garage</h1>
            <hr style={{ borderTop: "3px solid goldenrod" }} />

            {/* Ceiling Lights */}
            <div className="device-item" style={{ marginBottom: "20px", boxShadow: "0 0 10px rgba(218, 165, 32, 0.5)" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon
                        icon={faLightbulb}
                        style={{ marginRight: "10px", color: ceilingLightsOn ? "goldenrod" : "darkgrey" }}
                    />
                    {ceilingLightsOn && <span style={{ marginRight: "5px" }}>Is On</span>}
                    {!ceilingLightsOn && <span style={{ marginRight: "5px" }}>Is Off</span>}
                    <span className="label" style={{ marginLeft: "10px", flexBasis: "50%" }}>Ceiling Lights</span>
                </div>
                <button
                    className="toggle-button"
                    style={{
                        flexBasis: "20%",
                        minWidth: ceilingLightsButtonWidth,
                        backgroundColor: ceilingLightsOn ? "red" : "green",
                    }}
                    onClick={toggleCeilingLights}
                >
                    <span
                        style={{
                            textDecoration: ceilingLightsOn ? "none" : "underline",
                            color: "white",
                        }}
                    >
                        Turn {ceilingLightsOn ? "Off" : "On"}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default GaragePage;
