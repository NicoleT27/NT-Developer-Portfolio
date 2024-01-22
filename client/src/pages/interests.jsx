import React from "react";
import "./interests.css"


function Interests() {
  return (
    <div>
      <div className="interest-title">Interests/Languages</div>
      <div className="languages">Spanish</div>
      <div className="languages2">English</div>
      {/* <div className="card-container">
        <div className="card1">
          <div className="front">Traveling</div>
           <div className="back"> 3 Countries & 20 States So far</div> 
        </div>
        <div className="card2">
          <div className="front">Yoga</div>
          <div className="back">Meditation, Hot Yoga & Savasana</div>
        </div>
        <div className="card3">
          <div className="front">Fitness</div>
          <div className="back">Cycling,Weightlifting & Swimming</div>
        </div>
        <div className="card4">
          <div className="front">Volunteering</div>
          <div className="back">
            Feeding the homeless, Ronald Mcdonald house, Beach Cleanups
          </div>
        </div>
        <div className="card5">
          <div className="front">Singing</div>
          <div className="back">
            A Fl All State Singer for 2 years and a FL All County singer for 3
            years. Will never miss a karaoke🎤
          </div>
        </div>
        <div className="card6">
          <div className="front">Thrifting</div>
          <div className="back">Antique stores, Goodwill & Platos Closet</div>
        </div>
      </div> */}

      <div className="card-container">
        <div className="card">
          <h2 className="front">Traveling</h2>
          <div className="back"> 3 Countries & 20 States So far</div>
        </div>
        <div className="card">
          <h2 className="front">Yoga</h2>
          <div className="back">Meditation, Hot Yoga & Savasana</div>
        </div>
        <div className="card">
          <h2 className="front">Fitness</h2>
          <div className="back">Cycling,Swimming,& Weightlifting</div>
        </div>
        <div className="card">
          <h2 className="front">Volunteering</h2>
          <div className="back">
            Feeding the homeless, Ronald Mcdonald house, Beach Cleanups
          </div>
        </div>
        <div className="card">
          <h2 className="front">Singing</h2>
          <div className="back">
            A Fl All State Singer(2 years),FL All County singer(3
            years) Will never miss a karaoke🎤
          </div>
        </div>
        <div className="card">
          <h2 className="front">Thrifting</h2>
          <div className="back">Antique stores, Goodwill & Platos Closet</div>
        </div>
      </div>
    </div>
  );
  }
  export default Interests;