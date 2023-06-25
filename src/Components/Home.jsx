import React, { useState } from "react";
import LODGN from "./LODGN";
import Request from "./Request";
import "../Styles/Home.css";
import OngoingStays from "./OngoingStays";
import PreviousStays from "./PreviousStays";
import Reports from "./Reports";

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState("requests");

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="Home">
      <LODGN onComponentChange={handleComponentChange} />
      {selectedComponent === "requests" ? <Request /> : null}
      {selectedComponent === "ongoingStays" ? <OngoingStays /> : null}
      {selectedComponent === "previousStays" ? <PreviousStays /> : null}
      {selectedComponent === "reports" ? <Reports /> : null}
    </div>
  );
};

export default Home;
