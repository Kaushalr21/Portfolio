import React from 'react';
import '../styles/projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Go up one folder from components to reach assets
import project1 from '../assets/profile.jpg';
import project2 from '../assets/profile.jpg';
import project3 from '../assets/react.svg';


const Projects = () => {
  const projectData = [
    {
      image: project1,
      title: 'Weather App',
      caption: 'A web app that displays real-time weather using OpenWeather API.',
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://yourdomain.com/weather-app',
    },
    {
      image: project2,
      title: 'Chat App',
      caption: 'A real-time chat application using Socket.io and Node.js.',
      github: 'https://github.com/yourusername/chat-app',
      live: 'https://yourdomain.com/chat-app',
    },
    {
      image: project3,
      title: 'Portfolio Website',
      caption: 'My personal responsive portfolio built with React.',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourdomain.com/portfolio',
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
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
