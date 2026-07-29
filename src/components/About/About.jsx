import React from "react";
import "./About.css";

import { Card, Tag } from "antd";
import {
  CodeOutlined,
  LaptopOutlined,
  RocketOutlined,
} from "@ant-design/icons";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">
        About Me
      </h2>

      <p className="section-subtitle">
        Passionate React Frontend Developer dedicated to
        building modern, responsive and user-friendly web applications.
      </p>

      <div className="about-cards">

        <Card hoverable>
          <CodeOutlined className="about-icon" />
          <h3>Clean Code</h3>

          <p>
            Writing structured and maintainable
            React applications.
          </p>

          <Tag color="blue">React JS</Tag>

        </Card>

        <Card hoverable>
          <LaptopOutlined className="about-icon" />
          <h3>Responsive Design</h3>

          <p>
            Creating websites that work perfectly
            on every device.
          </p>

          <Tag color="green">UI / UX</Tag>

        </Card>

        <Card hoverable>
          <RocketOutlined className="about-icon" />
          <h3>Performance</h3>

          <p>
            Optimized and fast web applications
            with modern technologies.
          </p>

          <Tag color="purple">Performance</Tag>

        </Card>

      </div>

    </section>
  );
}

export default About;