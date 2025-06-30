import React from 'react';
import '../styles/home.css';
import profile from '../assets/profile.jpg'
import resume from '../assets/resumeS.pdf'

import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={profile}
        className="profile-image"
      />
      <div className="home-icons">
        <a href="https://github.com/Kaushalr21" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:kaushalram021@gmail.com">
          <MdEmail />
        </a>
        <a href="https://www.facebook.com/kaushal.kaushal.1829405/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/kaushalram21/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div >
      <h1 className="home-name">Hi, I'm Kaushal </h1>
      <p className="home-caption">Aspiring Web Developer | Passionate Coder</p>

      

      <a href={resume} download className="resume-button">
        Download Resume
      </a>
</div>
  );
};

export default Home;
