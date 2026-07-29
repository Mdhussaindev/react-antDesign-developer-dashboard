import React from "react";
import "./Footer.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-section">
          <h2 className="footer-logo">
            Muhammad <span>Hussain</span>
          </h2>

          <p className="footer-tagline">
            Frontend Developer passionate about building modern,
            responsive and user-friendly web applications using
            React.js & Ant Design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            <MailOutlined /> mdhussain.dev00@gmail.com
          </p>

            <p>
  <PhoneOutlined className="phone-icon" /> +92 348-2237414</p>

          <p>
            <EnvironmentOutlined /> Karachi, Pakistan
          </p>

          <div className="footer-social">

            <a
              href="https://github.com/Mdhussaindev"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-hussain-khan-b3b2203b3"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinOutlined />
            </a>

          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Muhammad Hussain.
          All Rights Reserved.
        </p>

        <button
          className="top-btn"
          onClick={scrollToTop}
        >
          <ArrowUpOutlined />
        </button>

      </div>
    </footer>
  );
};

export default Footer;