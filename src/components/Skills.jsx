import React from 'react';
import '../styles/skills.css';


const Skills = () => {
  const skillData = [
    {
      image: '/html.png',
      title: 'HTML5',
      caption: 'Markup language for structuring web pages',
    },
    {
      image: '/css.png',
      title: 'CSS3',
      caption: 'Style sheet language for designing web pages',
    },
    {
      image: '/js.png',
      title: 'JavaScript',
      caption: 'Scripting language for interactive web features',
    },
    {
      image: '/react.png',
      title: 'React JS',
      caption: 'Library for building user interfaces',
    },
    {
      image: '/node.png',
      title: 'Node JS',
      caption: 'Runtime for building server-side applications',
    },
    {
      image: '/mysql.png',
      title: 'MySQL',
      caption: 'Relational database management system',
    },
    {
      image: '/mysql.png',
      title: 'Python',
      caption: 'Relational database management system',
    },
    {
      image: '/mysql.png',
      title: 'Java',
      caption: 'Relational database management system',
    },
    {
      image: '/mysql.png',
      title: 'Git',
      caption: 'Relational database management system',
    },
    {
      image: '/mysql.png',
      title: 'GitHub',
      caption: 'Relational database management system',
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
            {/* <p className="skill-caption">{skill.caption}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
