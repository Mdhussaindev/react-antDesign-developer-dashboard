import React, { useState } from "react";
import "./Header.css";

import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { FaLaptopCode } from "react-icons/fa";

const { Header } = Layout;

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      key: "home",
      label: <a href="#home">Home</a>,
    },
    {
      key: "about",
      label: <a href="#about">About</a>,
    },
    {
      key: "skills",
      label: <a href="#skills">Skills</a>,
    },
    {
    key: "services",
    label: <a href="#services">Services</a>,
    },
    {
      key: "projects",
      label: <a href="#projects">Projects</a>,
    },
    {
      key: "contact",
      label: <a href="#contact">Contact</a>,
    },
  ];

  return (
    <Header className="header">

      <div className="logo">

        <FaLaptopCode className="logo-icon" />

        <span>Developer Dashboard</span>

      </div>

      <div className="desktop-menu">

        <Menu
          mode="horizontal"
          items={menuItems}
          selectable={false}
        />

      </div>

      <Button
        type="primary"
        className="hire-btn"
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
          items={menuItems}
          selectable={false}
        />
      </Drawer>

    </Header>
  );
};

export default HeaderComponent;