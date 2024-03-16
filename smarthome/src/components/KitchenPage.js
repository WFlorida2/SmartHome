import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const KitchenPage = () => {
    // State variables and toggle functions for each device
    const [ceilingLightOn, setCeilingLightOn] = useState(false);
    const toggleCeilingLight = () => {
        setCeilingLightOn(!ceilingLightOn);
    };

    const [kitchenCounterTopOn, setKitchenCounterTopOn] = useState(false);
    const toggleKitchenCounterTop = () => {
        setKitchenCounterTopOn(!kitchenCounterTopOn);
    };

    // Button width based on device state
    const ceilingLightButtonWidth = ceilingLightOn ? "auto" : "min-content";
    const kitchenCounterTopButtonWidth = kitchenCounterTopOn ? "auto" : "min-content";

    return (
        <div className="container">
            <h1 className="text-center" style={{ color: "goldenrod" }}>Lights Control</h1>
            <hr style={{ borderTop: "3px solid goldenrod" }} />
            <h2 className="text-center">Kitchen</h2>
            <hr style={{ borderTop: "1px solid #ccc" }} />
            <ul className="device-list">
                {/* Ceiling Light */}
                <li className="device-item" style={{ marginBottom: "20px", boxShadow: "0 0 10px rgba(218, 165, 32, 0.5)" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{ marginRight: "10px", color: ceilingLightOn ? "goldenrod" : "darkgrey" }}
                        />
                        {ceilingLightOn && <span style={{ marginRight: "5px" }}>Is On</span>}
                        {!ceilingLightOn && <span style={{ marginRight: "5px" }}>Is Off</span>}
                        <span className="label" style={{ marginLeft: "10px", flexBasis: "50%" }}>Ceiling Light</span>
                    </div>
                    <button
                        className="toggle-button"
                        style={{
                            flexBasis: "20%",
                            minWidth: ceilingLightButtonWidth,
                            backgroundColor: ceilingLightOn ? "red" : "green"
                        }}
                        onClick={toggleCeilingLight}
                    >
                        <span style={{ textDecoration: ceilingLightOn ? "none" : "underline", color: "white" }}>
                            Turn {ceilingLightOn ? "Off" : "On"}
                        </span>
                    </button>
                </li>

                {/* Kitchen Countertop Lamps */}
                <li className="device-item" style={{ marginBottom: "20px", boxShadow: "0 0 10px rgba(218, 165, 32, 0.5)" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{ marginRight: "10px", color: kitchenCounterTopOn ? "goldenrod" : "darkgrey" }}
                        />
                        {kitchenCounterTopOn && <span style={{ marginRight: "5px" }}>Is On</span>}
                        {!kitchenCounterTopOn && <span style={{ marginRight: "5px" }}>Is Off</span>}
                        <span className="label" style={{ marginLeft: "10px", flexBasis: "50%" }}>Kitchen Countertop Lamps</span>
                    </div>
                    <button
                        className="toggle-button"
                        style={{
                            flexBasis: "20%",
                            minWidth: kitchenCounterTopButtonWidth,
                            backgroundColor: kitchenCounterTopOn ? "red" : "green"
                        }}
                        onClick={toggleKitchenCounterTop}
                    >
                        <span style={{ textDecoration: kitchenCounterTopOn ? "none" : "underline", color: "white" }}>
                            Turn {kitchenCounterTopOn ? "Off" : "On"}
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default KitchenPage;


