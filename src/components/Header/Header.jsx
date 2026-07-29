// import React, { useState } from "react";
// import "./Header.css";

// import { Layout, Menu, Button, Drawer } from "antd";
// import { MenuOutlined } from "@ant-design/icons";
// import { FaLaptopCode } from "react-icons/fa";

// const { Header } = Layout;

// const HeaderComponent = () => {
//   const [open, setOpen] = useState(false);


//   // const menuItems = [
//   //   {
//   //     key: "home",
//   //     label: <a href="#home">Home</a>,
//   //   },
//   //   {
//   //     key: "about",
//   //     label: <a href="#about">About</a>,
//   //   },
//   //   {
//   //     key: "skills",
//   //     label: <a href="#skills">Skills</a>,
//   //   },
//   //   {
//   //   key: "services",
//   //   label: <a href="#services">Services</a>,
//   //   },
//   //   {
//   //     key: "projects",
//   //     label: <a href="#projects">Projects</a>,
//   //   },
    
//   //   {
//   //     key: "contact",
//   //     label: <a href="#contact">Contact</a>,
//   //   },
//   // ];
  
//   const desktopMenuItems = [
//   { key: "home", label: <a href="#home">Home</a> },
//   { key: "about", label: <a href="#about">About</a> },
//   { key: "skills", label: <a href="#skills">Skills</a> },
//   { key: "services", label: <a href="#services">Services</a> },
//   { key: "projects", label: <a href="#projects">Projects</a> },
//   { key: "contact", label: <a href="#contact">Contact</a> },
// ];



// const mobileMenuItems = [
//   { key: "home", label: <a href="#home">Home</a> },
//   { key: "about", label: <a href="#about">About</a> },
//   { key: "skills", label: <a href="#skills">Skills</a> },
//   { key: "services", label: <a href="#services">Services</a> },
//   { key: "projects", label: <a href="#projects">Projects</a> },
//   { key: "techstack", label: <a href="#tech-stack">Tech Stack</a> },
//   { key: "contact", label: <a href="#contact">Contact</a> },
// ];



//   return (
//     <Header className="header">

//       <div className="logo">

//         <FaLaptopCode className="logo-icon" />

//         <span>Developer Dashboard</span>

//       </div>

//       <div className="desktop-menu">

//         <Menu
//           mode="horizontal"
//           items={menuItems}
//           selectable={false}
//         />

//       </div>
// {/* 
//       <Button
//         type="primary"
//         className="hire-btn"
//       >
//         Hire Me
//       </Button> */}

//       <Button
//   type="primary"
//   className="hire-btn"
//   onClick={() => {
//     document.getElementById("contact")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   }}
// >
//   Hire Me
// </Button>

    

//       <Button
//         className="mobile-btn"
//         icon={<MenuOutlined />}
//         onClick={() => setOpen(true)}
//       />

//       <Drawer
//         title="Navigation"
//         placement="right"
//         onClose={() => setOpen(false)}
//         open={open}
//       >
//         <Menu
//           mode="vertical"
//           items={menuItems}
//           selectable={false}
//         />
//       </Drawer>

//     </Header>
//   );
// };

// export default HeaderComponent;

import React, { useState } from "react";
import "./Header.css";

import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { FaLaptopCode } from "react-icons/fa";

const { Header } = Layout;

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  // Desktop Navbar
  const desktopMenuItems = [
    { key: "home", label: <a href="#home">Home</a> },
    { key: "about", label: <a href="#about">About</a> },
    { key: "skills", label: <a href="#skills">Skills</a> },
    { key: "services", label: <a href="#services">Services</a> },
    { key: "projects", label: <a href="#projects">Projects</a> },
    { key: "contact", label: <a href="#contact">Contact</a> },
  ];

  // Mobile Drawer
  const mobileMenuItems = [
    { key: "home", label: <a href="#home">Home</a> },
    { key: "about", label: <a href="#about">About</a> },
    { key: "skills", label: <a href="#skills">Skills</a> },
    { key: "services", label: <a href="#services">Services</a> },
    { key: "projects", label: <a href="#projects">Projects</a> },
    { key: "techstack", label: <a href="#tech-stack">Tech Stack</a> },
    { key: "contact", label: <a href="#contact">Contact</a> },
  ];

  return (
    <Header className="header">

      {/* Logo */}
      <div className="logo">
        <FaLaptopCode className="logo-icon" />
        <span>Developer Dashboard</span>
      </div>

      {/* Desktop Navbar */}
      <div className="desktop-menu">
        <Menu
          mode="horizontal"
          items={desktopMenuItems}
          selectable={false}
        />
      </div>

      {/* Hire Me Button */}
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

      {/* Mobile Menu Button */}
      <Button
        className="mobile-btn"
        icon={<MenuOutlined />}
        onClick={() => setOpen(true)}
      />

      {/* Mobile Drawer */}
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
          onClick={() => setOpen(false)}
        />
      </Drawer>

    </Header>
  );
};

export default HeaderComponent;