

import React, { useState } from "react";
import "./Header.css";

import { Layout, Menu, Button, Drawer } from "antd";
import {
  MenuOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import { FaLaptopCode } from "react-icons/fa";

const { Header } = Layout;

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

 const desktopMenuItems = [
  { key: "home", label: <a href="#home">Home</a> },
  { key: "about", label: <a href="#about">About</a> },
  { key: "skills", label: <a href="#skills">Skills</a> },
  { key: "services", label: <a href="#services">Services</a> },
  { key: "projects", label: <a href="#projects">Projects</a> },
  { key: "contact", label: <a href="#contact">Contact</a> },
];
  
const mobileMenuItems = [
  { key: "home", label: <a href="#home">Home</a> },
  { key: "about", label: <a href="#about">About</a> },
  { key: "skills", label: <a href="#skills">Skills</a> },
  { key: "services", label: <a href="#services">Services</a> },
  { key: "projects", label: <a href="#projects">Projects</a> },
  { key: "techstack", label: <a href="#tech-stack">Tech Stack</a> },
  { key: "testimonials", label: <a href="#testimonials">Testimonials</a> },
  { key: "contact", label: <a href="#contact">Contact</a> },
  { key: "footer", label: <a href="#footer">Footer</a> },

  {
    type: "divider",
  },

  {
    key: "github",
    icon: <GithubOutlined />,
    label: (
      <a
        href="https://github.com/Mdhussaindev"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    ),
  },

  {
    key: "linkedin",
    icon: <LinkedinOutlined />,
    label: (
      <a
        href="https://www.linkedin.com/in/muhammad-hussain-khan-b3b2203b3"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    ),
  },
];

  return (
    <Header className="header">
      {/* Logo */}
      <div className="logo">
        <FaLaptopCode className="logo-icon" />
        <span>Developer Dashboard</span>
      </div>

      
      <div className="desktop-menu">
        <Menu
          mode="horizontal"
          items={desktopMenuItems}
          selectable={false}
        />
      </div>

      
      <Button
        type="primary"
        className="hire-btn"
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      >
        Hire Me
      </Button>

      
      <Button
        className="mobile-btn"
        icon={<MenuOutlined />}
        onClick={() => setOpen(true)}
      />

      
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode="vertical"
          items={mobileMenuItems}
          selectable={false}
          onClick={({ key }) => {
            if (key === "top") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }

            setOpen(false);
          }}
        />
      </Drawer>
    </Header>
  );
};

export default HeaderComponent;