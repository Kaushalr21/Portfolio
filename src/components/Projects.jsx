import React from 'react';
import '../styles/projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import weather from '../assets/weather.jpg'
import portf from '../assets/portf.jpg'
import order from '../assets/order.jpg'
import ec from '../assets/ec.png'

// Go up one folder from components to reach assets
import project1 from '../assets/profile.jpg';
import project2 from '../assets/profile.jpg';
import project3 from '../assets/react.svg';


const Projects = () => {
  const projectData = [
    {
      image: ec,
      title: 'E-commerce Website',
      caption: 'E-commerce wwebiste with add-to-cart and favrite options',
      github: 'https://github.com/Kaushalr21/shopkart',
    },
    {
      image: weather,
      title: 'Weather App',
      caption: 'A web app that displays real-time weather using OpenWeather API.',
      github: 'https://github.com/Kaushalr21/Weather',
      live: 'https://weatherfromhere.vercel.app/',
    },
    {
      image: order,
      title: 'Order form',
      caption: 'Created a seamless order form integrated with WhatsApp API for instant customer communication!',
      github: 'https://github.com/Kaushalr21/VaaranamNew',
      live: 'https://vaaranam-new.vercel.app/',
    },
    {
      image: portf,
      title: 'Portfolio Website',
      caption: 'My personal responsive portfolio built with React.',
      github: 'https://github.com/Kaushalr21/Portfolio',
      live: 'https://kaushalram.vercel.app/',
    },
    
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-caption">{project.caption}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
