import "./TechStack.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiFirebase,
  SiAntdesign,
 
} from "react-icons/si";


const technologies = [
  {
    icon: <FaReact />,
    name: "React JS",
  },
  {
    icon: <FaJsSquare />,
    name: "JavaScript",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
  },
  {
    icon: <SiAntdesign />,
    name: "Ant Design",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
  },
  {
  icon: <FaCode />,
  name: "VS Code",
},
 
];

function TechStack() {
  return (
    <section className="tech-stack" id="tech-stack">

      <div className="section-title">
        <h2>My Tech Stack</h2>

        <p>
          Technologies and tools I use to build modern,
          responsive and scalable web applications.
        </p>
      </div>

      <div className="tech-grid">

        {technologies.map((tech, index) => (
          <div
            className="tech-box"
            key={index}
          >
            <div className="tech-icon">
              {tech.icon}
            </div>

            <h3>{tech.name}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default TechStack;