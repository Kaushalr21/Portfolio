import React from 'react';
import '../styles/skills.css';


const Skills = () => {
  const skillData = [
    {
      image: '../src/assets/1.avif',
      title: 'Web development',
      caption: 'HTML, CSS, Javascript, Bootstrap, React.js and Django',
    },
    {
      image: '../src/assets/2.jpg',
      title: 'Software devevlopment',
      caption: 'Promblem soving using Java and Python languages',
    },
    {
      image: '../src/assets/3.jpg',
      title: 'Database',
      caption: 'Data handling using SQL queries in MySQL software',
    },
    
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-grid">
        {skillData.map((skill, index) => (
          <div className="skill-card" key={index}>
            {/* <img src={skill.image} alt={skill.title} className="skill-image" /> */}
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-caption">{skill.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
