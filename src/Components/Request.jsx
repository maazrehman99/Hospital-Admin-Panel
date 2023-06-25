import React, { useState } from 'react'
import '../Styles/request.css'
import Recieved from './Recieved';
import Negotiating from './Negotiating';
import Completed from './Completed';
import RequestContainer2 from './RequestContainer2';
import messages from '../assets/message.png'

const Request = () => {
  const [activeButton, setActiveButton] = useState("RECEIVED");

  const handleButtonChange = (button) => {
    setActiveButton(button);
  }

  return (
    <div className="requests">
      <h1>You currently have 3 requests</h1>
      <div className="hospitalInfo">
        {activeButton === "RECEIVED" ? <Recieved /> : null}
        {activeButton === "NEGOTIATING" ? <Negotiating /> : null}
        {activeButton === "COMPLETED" ? <Completed /> : null}
        <div className="buttonRow">
          <button
            className="rowButton"
            style={
              activeButton === "RECEIVED" ? { backgroundColor: "#FDF307" } : {}
            }
            onClick={() => handleButtonChange("RECEIVED")}
          >
            RECEIVED
          </button>
          <button
            className="rowButton"
            style={
              activeButton === "NEGOTIATING"
                ? { backgroundColor: "#FDF307" }
                : {}
            }
            onClick={() => handleButtonChange("NEGOTIATING")}
          >
            NEGOTIATING
          </button>
          <button
            className="rowButton"
            style={
              activeButton === "COMPLETED" ? { backgroundColor: "#FDF307" } : {}
            }
            onClick={() => handleButtonChange("COMPLETED")}
          >
            COMPLETED
          </button>
        </div>
      </div>
      <RequestContainer2 />
      <div className="messages">
        <img src={messages} alt="" />
      </div>
    </div>
  );
}

export default Request