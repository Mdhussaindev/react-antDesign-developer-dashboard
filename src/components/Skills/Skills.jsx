import React from "react";
import "./Skills.css";

import { Card, Progress, Rate } from "antd";

const skills = [
  {
    title: "React JS",
    progress: 90,
    rating: 5,
  },
  {
    title: "JavaScript",
    progress: 88,
    rating: 5,
  },
  {
    title: "HTML & CSS",
    progress: 95,
    rating: 5,
  },
  {
    title: "Firebase",
    progress: 80,
    rating: 4,
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">
        My Skills
      </h2>

      <p className="section-subtitle">
        Technologies and tools I use to build modern,
        responsive and high-performance web applications.
      </p>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <Card
            key={index}
            hoverable
            className="skill-card"
          >
            <h3>{skill.title}</h3>

            <Progress
              percent={skill.progress}
              strokeColor="#1677ff"
            />

            <Rate
              disabled
              defaultValue={skill.rating}
            />

          </Card>
        ))}

      </div>

    </section>
  );
}

export default Skills;