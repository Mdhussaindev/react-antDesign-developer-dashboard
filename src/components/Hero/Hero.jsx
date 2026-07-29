import React from "react";
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

          <Button
            size="large"
            icon={<DownloadOutlined />}
          >
            Download CV
          </Button>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <h2>Frontend Developer</h2>

          <p>React JS</p>

          <p>JavaScript</p>

          <p>Firebase</p>

          <p>Ant Design</p>

        </div>

      </div>

    </section>
  );
}

export default Hero;