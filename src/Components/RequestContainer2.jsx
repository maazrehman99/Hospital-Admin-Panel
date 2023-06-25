import React from 'react'
import '../Styles/RequestContainer2.css'
import Recieved from './Recieved'
import vector from '../assets/vector.svg'

const RequestContainer2 = () => {
  return (
    <div className=" hospitalInfo RequestContainer2">
      <Recieved />

      <button className="completed">Completed</button>

      <div className="row">
        <div className="card">
          <div className="img">
            <img src={vector} alt="vector" />
            <h3>Holiday Inn</h3>
            <div className="cardText">
              <p>1.5 miles away from joblocation. </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <div>
                  <p>Singles: $120</p>
                  <p>Doubles: $145</p>
                </div>
                <button>Book Now</button>
              </div>
              <button className="topRightButton">Rare Find</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={vector} alt="vector" />
            <h3>Holiday Inn</h3>
            <div className="cardText">
              <p>1.5 miles away from joblocation. </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <div>
                  <p>Singles: $120</p>
                  <p>Doubles: $145</p>
                </div>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={vector} alt="vector" />
            <h3>Holiday Inn</h3>
            <div className="cardText">
              <p>1.5 miles away from joblocation. </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <div>
                  <p>Singles: $120</p>
                  <p>Doubles: $145</p>
                </div>
                <button className="bookButton">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestContainer2