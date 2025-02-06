import React from 'react';
import './App.css'; // Import your CSS file for styling   <img src="bg.jpg" alt="Profile" className="profile-photo"/>

function App() {
  return (
    <div className="container-fluid ">
      {/* First Div: Profile Photo and Navbar */}
      
      <div className="profile-section box">
        <div className='pro-text container'>
          <div className='pro-text1'>
            <h1 className='name'>Kaushal R</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur veniam aliquid quisquam commodi obcaecati minima asperiores officia ipsa iste.</p>
          </div>
          <img className="pro-photo" src="wew" alt="" />
        </div>
        
      </div>
      <nav className="navbar">
          <ul>
            <li><a href="#education">Education</a></li>
            <li><a href="#skillsets">Skillsets</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      

      {/* Education Section */}
      <div id="education" className="section">
        <h2>Education</h2>
        <div className='data'>           
          <p><b>Bachelor of Engineering EEE</b></p>
          <p>KLN College of Engineering, Sivagangai</p>
          <p><b>CGPA - 8.229(till 6th semester)</b></p>
        </div>
        <div className='data'>           
          <p><b>HSC Examination</b></p>
          <p>SPJ Matric. Hr. Sec School, Madurai</p>
          <p><b>Percentage - 86.48%</b></p>
        </div>
        <div className='data'>           
          <p><b>SSLC Examination</b></p>
          <p>SPJ Matric. Hr. Sec School, Madurai</p>
          <p><b>Percentage - 85.6%</b></p>
        </div>
        
        
      </div>

      {/* Skillsets Section */}
      <div id="skillsets" className="section">
        <h2>Skillsets</h2>
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
      <footer className="footer">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;