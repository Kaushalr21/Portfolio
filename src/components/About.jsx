import React from 'react';
import '../styles/about.css';
import who from '../assets/who.png';
import interest from '../assets/who.jpg';

const About = () => {
  return (
    <div className="about-container">
      {/* First Section */}
      <div className="about-section">
        <img src={who} className="about-image" />
        <div className="about-text">
          <h2 className="about-heading">Who Am I?</h2>
          <p>
            I'm a passionate developer who loves creating clean and functional user interfaces.
            I recently completed my engineering degree and have been exploring web development using React.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="about-section reverse">
        <img src={interest} className="about-image" />
        <div className="about-text">
          <h2 className="about-heading">My Interests</h2>
          <p>
            I enjoy learning new technologies, solving problems, and building projects that make an impact.
            My interests include frontend development, UI/UX design, and automation tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
