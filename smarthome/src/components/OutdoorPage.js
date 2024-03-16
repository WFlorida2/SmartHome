import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const OutdoorPage = () => {
    // State variables and toggle functions for each device
    const [frontGardenLightOn, setFrontGardenLightOn] = useState(false);
    const toggleFrontGardenLight = () => {
        setFrontGardenLightOn(!frontGardenLightOn);
    };

    const [backGardenLightOn, setBackGardenLightOn] = useState(false);
    const toggleBackGardenLight = () => {
        setBackGardenLightOn(!backGardenLightOn);
    };

    const [elevationsLightOn, setElevationsLightOn] = useState(false);
    const toggleElevationsLight = () => {
        setElevationsLightOn(!elevationsLightOn);
    };

    // Button width based on device state
    const frontGardenLightButtonWidth = frontGardenLightOn ? "auto" : "min-content";
    const backGardenLightButtonWidth = backGardenLightOn ? "auto" : "min-content";
    const elevationsLightButtonWidth = elevationsLightOn ? "auto" : "min-content";

    return (
        <div className="container">
            <h1 className="text-center" style={{ color: "goldenrod" }}>Lights Control</h1>
            <hr style={{ borderTop: "3px solid goldenrod" }} />
            <h2 className="text-center">Outdoor</h2>
            <hr style={{ borderTop: "3px solid goldenrod" }} />
            <ul className="device-list">
                {/* Front Garden & Driveway Light */}
                <li
                    className="device-item"
                    style={{
                        marginBottom: "20px",
                        boxShadow: "0 0 10px rgba(218, 165, 32, 0.5)",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{
                                marginRight: "10px",
                                color: frontGardenLightOn ? "goldenrod" : "darkgrey",
                            }}
                        />
                        {frontGardenLightOn && (
                            <span style={{ marginRight: "5px" }}>Is On</span>
                        )}
                        {!frontGardenLightOn && (
                            <span style={{ marginRight: "5px" }}>Is Off</span>
                        )}
                        <span
                            className="label"
                            style={{ marginLeft: "10px", flexBasis: "50%" }}
                        >
                            Front Garden & Driveway Light
                        </span>
                    </div>
                    <button
                        className="toggle-button"
                        style={{
                            flexBasis: "20%",
                            minWidth: frontGardenLightButtonWidth,
                            backgroundColor: frontGardenLightOn ? "red" : "green",
                        }}
                        onClick={toggleFrontGardenLight}
                    >
                        <span
                            style={{
                                textDecoration: frontGardenLightOn ? "none" : "underline",
                                color: "white",
                            }}
                        >
                            Turn {frontGardenLightOn ? "Off" : "On"}
                        </span>
                    </button>
                </li>

                {/* Back Garden Light */}
                <li
                    className="device-item"
                    style={{
                        marginBottom: "20px",
                        boxShadow: "0 0 10px rgba(218, 165, 32, 0.5)",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{
                                marginRight: "10px",
                                color: backGardenLightOn ? "goldenrod" : "darkgrey",
                            }}
                        />
                        {backGardenLightOn && (
                            <span style={{ marginRight: "5px" }}>Is On</span>
                        )}
                        {!backGardenLightOn && (
                            <span style={{ marginRight: "5px" }}>Is Off</span>
                        )}
                        <span
                            className="label"
                            style={{ marginLeft: "10px", flexBasis: "50%" }}
                        >
                            Back Garden Light
                        </span>
                    </div>
                    <button
                        className="toggle-button"
                        style={{
                            flexBasis: "20%",
                            minWidth: backGardenLightButtonWidth,
                            backgroundColor: backGardenLightOn ? "red" : "green",
                        }}
                        onClick={toggleBackGardenLight}
                    >
                        <span
                            style={{
                                textDecoration: backGardenLightOn ? "none" : "underline",
                                color: "white",
                            }}
                        >
                            Turn {backGardenLightOn ? "Off" : "On"}
                        </span>
                    </button>
                </li>

                {/* Elevations Light */}
                <li
                    className="device-item"
                    style={{
                        marginBottom: "20px",
                        boxShadow: "0 0 10px rgba(218, 165, 32, 0.5)",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{
                                marginRight: "10px",
                                color: elevationsLightOn ? "goldenrod" : "darkgrey",
                            }}
                        />
                        {elevationsLightOn && (
                            <span style={{ marginRight: "5px" }}>Is On</span>
                        )}
                        {!elevationsLightOn && (
                            <span style={{ marginRight: "5px" }}>Is Off</span>
                        )}
                        <span
                            className="label"
                            style={{ marginLeft: "10px", flexBasis: "50%" }}
                        >
                            Elevations Light
                        </span>
                    </div>
                    <button
                        className="toggle-button"
                        style={{
                            flexBasis: "20%",
                            minWidth: elevationsLightButtonWidth,
                            backgroundColor: elevationsLightOn ? "red" : "green",
                        }}
                        onClick={toggleElevationsLight}
                    >
                        <span
                            style={{
                                textDecoration: elevationsLightOn ? "none" : "underline",
                                color: "white",
                            }}
                        >
                            Turn {elevationsLightOn ? "Off" : "On"}
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default OutdoorPage;
