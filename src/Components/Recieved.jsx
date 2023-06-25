import React from 'react'
import '../Styles/Recieved.css'

const Recieved = () => {
  return (
    <div className="hospitalData">
      <div className="hospitalName HospitalBorderLeft">
        <h3>St Judes Hospital</h3>
        <p>Sarasota, FL. 33178</p>
      </div>
      <div className="hospitalDates HospitalBorderLeft">
        <div style={{ display: "flex" }}>
          <div className="startMonth" style={{ marginRight: "1rem" }}>
            <h3>10</h3>
            <p>October</p>
          </div>
          <span style={{ marginRight: "2rem" }}>-</span>
          <div className="endMonth">
            <h3>17</h3>
            <p>December</p>
          </div>
        </div>
      </div>
      <div className="hospitalRoom">
        <h3>20 Rooms</h3>
        <p>10 Singles, 20 Doubles</p>
      </div>
    </div>
  );
}

export default Recieved