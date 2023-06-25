import React, { useState } from "react";
import "../Styles/LODGN.css";

const LODGN = ({ onComponentChange }) => {
  const [activeComponent, setActiveComponent] = useState("requests");
  const [showAside, setShowAside] = useState(false);

  const handleItemClick = (component) => {
    setActiveComponent(component);
    onComponentChange(component);
     setShowAside(!showAside);
  };

  const handleToggleAside = () => {
    setShowAside(!showAside);
  };

  return (
    <>
      <aside className={`LODGN-aside ${showAside ? "show-aside" : ""}`}>
        <div className="LODGN">
          <h1>LODGN</h1>
          <ul>
            <li
              className={activeComponent === "requests" ? "active" : ""}
              onClick={() => handleItemClick("requests")}
            >
              Current Requests
            </li>
            <li
              className={activeComponent === "ongoingStays" ? "active" : ""}
              onClick={() => handleItemClick("ongoingStays")}
            >
              Ongoing Stays
            </li>
            <li
              className={activeComponent === "previousStays" ? "active" : ""}
              onClick={() => handleItemClick("previousStays")}
            >
              Previous Stays
            </li>
            <li
              className={activeComponent === "reports" ? "active" : ""}
              onClick={() => handleItemClick("reports")}
            >
              Reports
            </li>
          </ul>
          <div className="logout-container">
            <button>Log-out</button>
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem" }}>Help-desk</p>
          <p style={{ textAlign: "center" }}>786-874 9988</p>
        </div>
        <button className="cancel-button" onClick={handleToggleAside} style={{
          fontWeight: "bold"
        }}>
          X
        </button>
      </aside>
      <div className="hamburger" onClick={handleToggleAside}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default LODGN;
