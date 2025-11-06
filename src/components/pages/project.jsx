import React from 'react'; // make sure to create and import this CSS file

const Project = () => {
  const projects = [
    {
      title: 'Skill-Swap using Flutter & Firebase',
      description:
        'A web app for users to exchange skills by creating profiles and finding matching skill swaps.',
      link: 'https://github.com/emonmah/Skill-Swap',
    },
    {
      title: 'Tour App Using Java & SQLite',
      description:
        'An Android app that allows users to browse and book tours, with SQLite-based data storage.',
      link: 'https://github.com/emonmah/Tour_App',
    },
    {
      title: 'CURD Operation Using ExpressJS, MYSQL & Postman',
      description:
        'A RESTful API for managing user data with Create, Read, Update, and Delete operations.',
      link: 'https://github.com/emonmah/CRUD',
    },
    {
      title: 'Stop-Watch Application using ReactJS',
      description:
        'A simple and interactive stopwatch application built with ReactJS.',
      link: 'https://github.com/emonmah/Stop-Watch-React',
    },
    {
      title: 'TODO Application Using Flutter & Hive',
      description:
        'A mobile app for managing tasks with local storage using Hive database.',
      link: 'https://github.com/emonmah/ToDO',
    },
  ];

  return (
    <div className="projects-section card" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
