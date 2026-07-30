import React from "react";
import "./Projects.css";

import { Card, Button, Tag, Carousel } from "antd";
import {
  GithubOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const projects = [
  {
    title: "React Portfolio",
    description:
      "A modern portfolio website built with React JS and Ant Design featuring responsive layouts and premium UI.",
    image: "https://picsum.photos/600/350?random=1",
    tech: ["React", "Ant Design", "CSS"],
  },

  {
    title: "Firebase Authentication",
    description:
      "Authentication system using Firebase Authentication and Firestore with secure login and signup.",
    image: "https://picsum.photos/600/350?random=2",
    tech: ["Firebase", "React", "JavaScript"],
  },

  {
    title: "Restaurant Website",
    description:
      "Fully responsive restaurant landing page with modern UI, animations and mobile-friendly design.",
    image: "https://picsum.photos/600/350?random=3",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-heading">

        <h2>Featured Projects</h2>

        <p>
          Some of my recent frontend projects built using
          modern web technologies.
        </p>

      </div>

      <Carousel autoplay dots>

        {projects.map((project, index) => (

          <div key={index}>

            <Card
              hoverable
              cover={
                <img
                  src={project.image}
                  alt={project.title}
                />
              }
              className="project-card"
            >

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">

                {project.tech.map((item) => (

                  <Tag color="blue" key={item}>
                    {item}
                  </Tag>

                ))}

              </div>

              <div className="project-buttons">

                <Button
                type="primary"
                href="https://hussain-react-project.netlify.app/"
                target="_blank"
                >
                Live Demo
                </Button>

                <Button
                type="primary"
                href="https://github.com/Mdhussaindev"
                target="_blank"
                >
                GitHub
                </Button>

              </div>

            </Card>

          </div>

        ))}

      </Carousel>

    </section>
  );
}

export default Projects;