import React, { useState } from "react";
import './App.css'; // Import your CSS file for styling   <img src="bg.jpg" alt="Profile" className="profile-photo"/>
import vLogo from './assets/gifP.gif'
import fb from './assets/facebook.png'
import insta from './assets/instagram.png'
import git from './assets/github.png'
import mail from './assets/email.png'

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="container-fluid mainPage">
      
      {/* Profile Photo */}      
      <div className="page home">
            <div className="home-icon">
              <img src={fb} alt="" />
              <img src={insta} alt="" />
              <img src={git} alt="" />
              <img src={mail} alt="" />
            </div>
            <div className="home-data">
            
            <div className='homeText'>
              <h1 >Hello, I am</h1>
              <h2 className='name'><b>Kaushal R</b></h2>
              <h5 style={{color:"#fbc531"}}>Front-end Designer | Developer</h5>
            </div>
            <img  className="pro-photo" src={null} alt="" />
          </div>
          <div className="homeButton">
            <p className="But"> HOME <i className="bi bi-caret-left-fill"></i></p>
            <p className="But"> About <i className="bi bi-caret-left-fill"></i></p>
            <p className="But"> Skills <i className="bi bi-caret-left-fill"></i></p>
            <p className="But"> Projects <i className="bi bi-caret-left-fill"></i></p>
          </div>      
      </div>
      
      {/*Section 2 */}
      <div id="education" className="page aboutSec">
        <div  className='about-data container'>           
          <h1 style={{color:"#fbc531", marginBottom:"20px"}}>About me</h1>
            <div className="about-text" >
              <img src={vLogo} alt="" style={{width:"200px", height:"200px"}}/>
              <div>
                <h3>Crafting Digital Experiences with Code & Creativity</h3>
                <p>Hi, I'm Kaushal, a passionate web and software developer dedicated to building efficient, scalable, and user-friendly applications. I enjoy turning ideas into reality through clean, functional code and intuitive designs.
                   With a strong interest in both front-end and back-end development, I specialize in creating seamless web experiences and software solutions that solve real-world problems. Always eager to learn and adapt to new technologies, I strive to stay ahead in the ever-evolving tech landscape. </p>
              </div>
            </div>
        </div>
              
      </div>

      {/* Skillsets Section */}
      <div id="skillsets" className="page skillSec">
      <h1 style={{color:"#fbc531", width:"100%"}} >Skills</h1>
        <div  className='skill-data container'>           
              <div className="skill-text" >
                <img src={vLogo} alt="" style={{width:"200px", height:"200px"}}/>
                <div className="skill-text-plus ">
                  <h3>Web Development</h3>
                  <p>Responsive and high-performance websites are developed with a focus on seamless user experience, scalability, and efficiency. </p>
                  <span>ReactJS</span>
                  <span>Javascript</span>
                  <span>CSS</span>
                  <span>HTML</span>
                </div>
              </div>          
          </div>
          <div  className='skill-data container'>           
              <div className="skill-text" >
                <img src={vLogo} alt="" style={{width:"200px", height:"200px"}}/>
                <div className="skill-text-plus">
                  <h3>Programming</h3>
                  <p>C and Java programs are developed to build efficient, scalable, and robust software solutions.</p>
                  <span>C</span>
                  <span>Java</span>
                </div>
              </div>          
          </div>

          <div  className='skill-data container'>           
              <div className="skill-text" >
                <img src={vLogo} alt="" style={{width:"200px", height:"200px"}}/>
                <div className="skill-text-plus">
                  <h3>Database</h3>
                  <p>SQL and MySQL are used to design, manage, and optimize databases for efficient data storage and retrieval.</p>
                  <span>SQL</span>
                  <span>MySQL</span>
                </div>
              </div>          
          </div>
          <div  className='skill-data container'>           
              <div className="skill-text" >
                <img src={vLogo} alt="" style={{width:"200px", height:"200px"}}/>
                <div className="skill-text-plus">
                  <h3>Others</h3>
                  <p>Additional skills include Object-Oriented Programming (OOP) for modular code design, Git for version control, and GitHub for collaborative development and code management.</p>
                  <span>OOPS</span>
                  <span>Git</span>
                  <span>GitHub</span>
                </div>
              </div>          
          </div>       
      </div>

      {/* Projects Section */}
      <div id="pro" className="page proSec">
        <h1 style={{color:"#fbc531"}} >Projects</h1>
          <div  className='pro-data container'>           
              <div className="pro-text" >
                <img src={vLogo} alt="" style={{width:"100px", height:"100px"}}/>
                <div className="pro-text-plus">
                  <h3>Order Form with WhatsApp API</h3>
                  <p>Developed an automated order form that integrates with WhatsApp API to send order details directly to the company’s WhatsApp number.</p>
                </div>
              </div>          
          </div> 
          <div  className='pro-data container'>           
              <div className="pro-text" >
                <img src={vLogo} alt="" style={{width:"100px", height:"100px"}}/>
                <div className="pro-text-plus">
                  <h3>Weather Web Application </h3>
                  <p>A real-time weather app was built to display temperature, humidity, and forecasts using reliable APIs in a responsive interface.</p>
                </div>
              </div>          
          </div> 
          
          
          
        
      </div>     

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Kaushal. All rights reserved.</p>
      </footer>
      
    </div>
  );
}

export default App;