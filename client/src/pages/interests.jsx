import React from "react";
import "./interests.css"


function Interests() {
  return (
    <div>
      <div className="interest-title">Languages/Interests</div>
      <div className="languages">
      <div className="language1">Spanish</div>
      <div className="language2">English</div>
      </div>
      <div id="flipcards">
        <div className="card-container">
          <div className="card">
            <h2 className="flip-card-front">Traveling</h2>
            <div className="flip-card-back">
              {" "}
              3 Countries & 20 States So far
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <h2 className="flip-card-front">Yoga</h2>
            <div className="flip-card-back">
              Meditation, Hot Yoga & Savasana
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <h2 className="flip-card-front">Fitness</h2>
            <div className="flip-card-back">
              Cycling,Swimming,& Weightlifting
            </div>
          </div>
        </div>

        <div className="card-container2">
          <div className="card">
            <h2 className="flip-card-front">Volunteering</h2>
            <div className="flip-card-back">
              Feeding the homeless, Ronald Mcdonald house, Beach Cleanups
            </div>
          </div>
        </div>

        <div className="card-container2">
          <div className="card">
            <h2 className="flip-card-front">Singing</h2>
            <div className="flip-card-back">
              A Fl All State Singer(2 years),FL All County singer(3 years) Will
              never miss a karaoke🎤
            </div>
          </div>
        </div>

        <div className="card-container2">
          <div className="card">
            <h2 className="flip-card-front">Thrifting</h2>
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