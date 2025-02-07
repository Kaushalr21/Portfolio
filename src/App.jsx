import React, { useState } from "react";
import './App.css'; // Import your CSS file for styling   <img src="bg.jpg" alt="Profile" className="profile-photo"/>

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="container-fluid">
      {/* First Div: Profile Photo and Navbar */}
      
      <div id="ok" className="profile-section box">
        <div className='pro-text container'>
          <div className='pro-text1'>
            <h1 >Hello, I am</h1>
            <h1 className='name'><b>Kaushal R</b></h1>
            <h4>Front-end Designer | Developer</h4>
          </div>
          <img  className="pro-photo" src="" alt="hjh" />
        </div>
        
      </div>
      <nav className="navbar">
          <div className="moreIcon" onClick={() => setIsActive(!isActive)} >
              <h1><i class="bi bi-list"></i></h1>
              <h1>Kaushal R</h1>
          </div>
          <div className={`navbarL ${isActive ? "active" : ""}`}>
            <ul>
              <li><a href="#ok">Home</a></li>
              <li><a href="#home">About</a></li>
              <li><a href="#education">Education</a></li>
              
            </ul>
            <h3>R Kaushal</h3>
            <ul>
              <li><a href="#skillsets">Skillsets</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#projects">Contact</a></li>
            </ul>
          </div>
        </nav>
      

      {/* Education Section */}
      <div id="education" className="section">
        <div  className='data'>           
          <h1>Who am I?</h1>
          <p>I'm a web developer creating seamless,optimizing websites and user-friendly digital experiences. </p>
        </div>
        <div className='data'>           
          <h1>Personal info</h1>
          <p>Birthdate: 21.05.2004</p>
          <p>Email: kaushalram021@gmail.com</p>
          <p>Phone: 9344614676</p>
          <p>Location: Madurai</p>
        </div>
        <div className='data'>           
          <h1>My Expertise</h1>
          <p>Web Designing</p>
        </div>
        
        
      </div>

      {/* Skillsets Section */}
      <div id="skillsets" className="section">
        <div className='data'>           
          <p><b>Web Development</b></p>
          <p>JavaScript, ReactJS, HTML, CSS</p>
          <p><b>Programming</b></p>
          <p>C, Java</p>
          <p><b>Database</b></p>
          <p>SQL, MySQL</p>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="section">
        <h2>Projects</h2>
        <p>Your projects and accomplishments go here.</p>
      </div>

      {/* Footer */}
      
    </div>
  );
}

export default App;