import React from "react";
import travel from "../assets/images/travel.jpg";
import yoga from "../assets/images/yoga.png";
import fitness from "../assets/images/fitness.jpg";
import volunteering from "../assets/images/volunteering.jpg";
import singing from "../assets/images/singing.jpg";
import thrifting from "../assets/images/thrifting.png";
import "./interests.css"


function Interests() {
  return (
    <div>
      <div className="interest-title">Languages/Interests</div>
      <div className="languages">
        <div className="language1">Spanish</div>
        <span>Native</span>
        <div className="language2">English</div>
        <span>Native</span>
      </div>
      <div id="flipcards">
        <div className="card-container">
          <div className="card">
            <h2 className="flip-card-front">
              <img src={travel} className="flip-card-front"></img>
            </h2>
            <div className="flip-card-back">
              {" "}
              3 Countries & 20 States So far
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <h2 className="flip-card-front">
              <img src={yoga} className="flip-card-front"></img>
            </h2>
            <div className="flip-card-back">
              Meditation, Hot Yoga & Savasana
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <h2 className="flip-card-front">
              <img src={fitness} className="flip-card-front"></img>
            </h2>
            <div className="flip-card-back">
              Cycling,Swimming,& Weightlifting
            </div>
          </div>
        </div>

        <div className="card-container2">
          <div className="card">
            <h2 className="flip-card-front">
              <img src={volunteering} className="flip-card-front"></img>
            </h2>
            <div className="flip-card-back">
              Feeding the homeless, Ronald Mcdonald house, Beach Cleanups
            </div>
          </div>
        </div>

        <div className="card-container2">
          <div className="card">
            <h2 className="flip-card-front">
              {" "}
              <img src={singing} className="flip-card-front"></img>
            </h2>
            <div className="flip-card-back">
              A Fl All State Singer(2 years),FL All County singer(3 years) Will
              never miss a karaoke🎤
            </div>
          </div>
        </div>

        <div className="card-container2">
          <div className="card">
            <h2 className="flip-card-front">
              {" "}
              <img src={thrifting} className="flip-card-front"></img>
            </h2>
            <div className="flip-card-back">
              Antique stores, Goodwill & Platos Closet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
  export default Interests;