import React from "react";
import CV from "../../assets/Muhammad-Hussain-CV.pdf";
import "./Hero.css";


import { Button, Tag } from "antd";
import {
  ArrowRightOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <Tag color="blue" className="hero-tag">
          React Frontend Developer
        </Tag>

        <h1>
          Hi, I'm <span>Muhammad Hussain Khan</span>
        </h1>

        <h2>
          Building Modern & Responsive Web Applications
        </h2>

        <p>
          Passionate React Developer creating beautiful,
          responsive and user-friendly web applications
          using React JS, Ant Design and modern frontend
          technologies.
        </p>

        <div className="hero-buttons">

          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            href="#projects"
          >
            View Projects
          </Button>

          <a href={CV} download>
  <Button
    size="large"
    icon={<DownloadOutlined />}
  >
    Download CV
  </Button>
</a>
        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <h2 className="tech-card">Frontend Developer</h2>

<p className="tech-card">React JS</p>

<p className="tech-card">JavaScript</p>

<p className="tech-card">Firebase</p>

<p className="tech-card">Ant Design</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;