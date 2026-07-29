import React from "react";
import "./Services.css";

import { Card, Button } from "antd";

import {
  CodeOutlined,
  MobileOutlined,
  CloudOutlined,
} from "@ant-design/icons";

const services = [
  {
    id: 1,
    icon: <CodeOutlined />,
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites built using React JS and the latest frontend technologies.",
  },

  {
    id: 2,
    icon: <MobileOutlined />,
    title: "Responsive Design",
    description:
      "Beautiful interfaces that work seamlessly across desktop, tablet and mobile devices.",
  },

  {
    id: 3,
    icon: <CloudOutlined />,
    title: "Firebase Integration",
    description:
      "Authentication, Firestore Database and hosting solutions for modern web applications.",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="section-heading">

        <h2>My Services</h2>

        <p>
          I build modern digital experiences with clean code,
          responsive layouts and scalable solutions.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (

          <Card
            key={service.id}
            hoverable
            className="service-card"
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <Button type="primary" size="large">
              Learn More
            </Button>

          </Card>

        ))}

      </div>

    </section>
  );
}

export default Services;