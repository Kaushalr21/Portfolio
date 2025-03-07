import React, { useState } from "react";
import './App.css'; // Import your CSS file for styling   <img src="bg.jpg" alt="Profile" className="profile-photo"/>
import vLogo from './assets/gifP.gif'
import fb from './assets/facebook.png'
import insta from './assets/instagram.png'
import git from './assets/github.png'
import mail from './assets/email.png'
import weather from './assets/cs.png'
import order from './assets/a.png'

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div id="main-page">
      
      {/*HOME PAGE*/}      
      <div id="home-page">
        <div className="home-content">  
          <div className="home-icon">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={git} alt="" />
            <img src={mail} alt="" />
          </div>       
          <div className="home-profile">         
            <div className='home-text'>
                <h1 >Hello, I am</h1>
                <h2 className='name'><b>Kaushal R</b></h2>
                <h5 style={{color:"#fbc531"}}>Front-end Designer | Developer</h5>
            </div>
            <img  className="pro-photo" src={null} alt="" />
          </div>
        </div>
        <div className="homeButton">
            <a className="But" href="#home-page"> HOME <i className="bi bi-caret-left-fill tri"></i></a>
            <a className="But" href="#about-page"> About <i className="bi bi-caret-left-fill tri"></i></a>
            <a className="But" href="#skill-page"> Skills <i className="bi bi-caret-left-fill tri"></i></a>
            <a className="But" href="#project-page"> Projects <i className="bi bi-caret-left-fill tri"></i></a>
        </div>      
      </div>
      
      {/*ABOUT PAGE*/}
      <div id="about-page">
        <div  className='about-content'>           
          <h1 style={{color:"#fbc531", marginBottom:"20px"}}>About me</h1>
          <div className="about-profile" >
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
      <div id="skill-page">
        <h1 id="page-head"  >Skills</h1>
        <div  className='skill-content'>           
          <div className="skill-box" >
            <img src={vLogo} alt="" style={{width:"200px", height:"200px"}}/>
            <div className="skill-text-plus ">
              <h3>Web Development</h3>
              <p>Responsive and high-performance websites are developed with a focus on seamless user experience, scalability, and efficiency. </p>
              <div className="skill-display">
                <span>ReactJS</span>
                <span>Javascript</span>
                <span>CSS</span>
                <span>HTML</span>
              </div>
            </div>
          </div>  
          <div className="skill-box" >
            <img src={vLogo} alt="" style={{width:"200px", height:"200px"}}/>
            <div className="skill-text-plus ">
              <h3>Programming</h3>
              <p>C and Java programs are developed to build efficient, scalable, and robust software solutions. </p>
              <div className="skill-display">
                <span>C</span>
                <span>Java</span>                    
              </div>
            </div>
          </div>     
        </div>   

        <div className='skill-content'>   
          <div className="skill-box" >
            <img src={vLogo} alt="" style={{width:"200px", height:"200px"}}/>
            <div className="skill-text-plus ">
              <h3>Database</h3>
              <p>Familiar with the basics of SQL and MySQL, including database creation, CRUD operations, simple queries, and basic joins. </p>
              <div className="skill-display">
                <span>SQL</span>
                <span>MySQL</span>                    
              </div>
            </div>
          </div>    
          <div className="skill-box" >
            <img src={vLogo} alt="" style={{width:"200px", height:"200px"}}/>
            <div className="skill-text-plus ">
              <h3>Others</h3>
              <p>Additional skills include Object-Oriented Programming (OOP) for modular code design, Git for version control, and GitHub for collaborative development and code management.</p>
              <div className="skill-display">
                <span>Git</span>
                <span>Github</span>       
                <span>OOPS</span>                
              </div>
            </div>
          </div>                    
        </div>                
      </div>     

      {/*PROJECT PAGE*/}
      <div id="project-page">
      <h1 id="page-head">Projects</h1>
        <div  className='project-content'>                     
          <div className="project-profile" >
              <img src={order} alt="" style={{width:"200px", height:"200px"}}/>
              <div>
                <h3>Order Form with WhatsApp API </h3>
                <p>Developed an automated order form that integrates with WhatsApp API to send order details directly to the company’s WhatsApp number. </p>       
              </div>
              <span title="open project"> <a href="https://github.com/Kaushalr21/VaaranamNew" target="_blank"> <i class="bi bi-arrow-right"></i></a> </span>
          </div>
        </div>     
        <div  className='project-content'>                     
          <div className="project-profile" >
              <img src={weather} alt="" style={{width:"200px", height:"200px"}}/>
              <div>
                <h3> Weather web application </h3>
                <p>Developed a web application using React and fetched data from API.</p>
              </div>
              <span title="open project"> <a href="https://github.com/Kaushalr21/Weather" target="_blank"><i class="bi bi-arrow-right" ></i></a> </span>
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