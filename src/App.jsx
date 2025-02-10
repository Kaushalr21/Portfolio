import React, { useState } from "react";
import './App.css'; // Import your CSS file for styling   <img src="bg.jpg" alt="Profile" className="profile-photo"/>

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="container-fluid mainPage">
      
      {/* Profile Photo */}      
      <div className="page home">
          <div className='homeText'>
            <h1 >Hello, I am</h1>
            <h2 className='name'><b>Kaushal R</b></h2>
            <h5>Front-end Designer | Developer</h5>
          </div>
          <img  className="pro-photo" src={null} alt="" />
          <div className="homeButton">
            <p className="But"> HOME <i className="bi bi-caret-left-fill"></i></p>
            <p className="But"> About <i className="bi bi-caret-left-fill"></i></p>
            <p className="But"> Skills <i className="bi bi-caret-left-fill"></i></p>
            <p className="But"> Projects <i className="bi bi-caret-left-fill"></i></p>
          </div>      
      </div>
      
      {/*Section 2 */}
      <div id="education" className="page aboutSec">
        <div  className='data'>           
          <h1>Who am I?</h1>
          <p>I'm a web developer creating seamless,optimizing websites and user-friendly digital experiences. </p>
        </div>
        <div className='data'>           
          <h1>My Expertise</h1>
          <p>Web Designing</p>
        </div>        
      </div>

      {/* Skillsets Section */}
      <div id="skillsets" className="page skillSec">
        <div className='data'>           
          <h1>Skills</h1>
            
        
        </div>
      </div>

      {/* Projects Section */}
      <div id="skillsets" className="page proSec">
        <div className='data'>           
          <h1>Project</h1>                  
        </div>
        
      </div>     

      {/* Footer */}
      <footer className="page footer">
        <p>&copy; 2025 Kaushal. All rights reserved.</p>
      </footer>
      
    </div>
  );
}

export default App;