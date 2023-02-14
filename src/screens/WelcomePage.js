import React from 'react';
import '../css/WelcomePage.css'
import { useNavigate  } from "react-router-dom";


function WelcomePage() {
  const navigate = useNavigate();


  return (
    // <div className="bodyContainer">
        <div className="welcomePageContainer">
        <div className="welcomeContentContainer">
          <h1>Welcome to the Habit Tracker App</h1>
          <p>Start tracking your daily habits and see your progress over time!</p>
          <button class="welcomeBtn" onClick={() => navigate("/home")} >
            Welcome
            <div class="dot"></div>
          </button>
        </div>
            
        </div>
    // </div>
  );
}

export default WelcomePage;