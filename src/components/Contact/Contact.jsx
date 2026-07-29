import React from "react";
import "./Contact.css";

import {
  Card,
  Form,
  Input,
  Button,
} from "antd";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">

        <h2>Let's Work Together</h2>

        <p>
          Have a project in mind or looking for a React Developer?
          Feel free to get in touch.
        </p>

      </div>

      <div className="contact-container">

        <Card className="contact-form-card">

          <Form layout="vertical">

            <Form.Item label="Full Name">

              <Input
                size="large"
                placeholder="Enter your full name"
              />

            </Form.Item>

            <Form.Item label="Email">

              <Input
                size="large"
                placeholder="Enter your email"
              />

            </Form.Item>

            <Form.Item label="Message">

              <TextArea
                rows={6}
                placeholder="Write your message..."
              />

            </Form.Item>

            <Button
              type="primary"
              size="large"
              block
            >
              Send Message
            </Button>

          </Form>

        </Card>

        <div className="contact-info">

          <Card className="info-card">

            <MailOutlined className="info-icon"/>

            <h3>Email</h3>

            <p>mdhussain.dev00@gmail.com</p>

          </Card>

          <Card className="info-card">

            <PhoneOutlined className="info-icon"/>

            <h3>Phone</h3>

            <p>+92 315 0278120</p>

          </Card>

          <Card className="info-card">

            <EnvironmentOutlined className="info-icon"/>

            <h3>Location</h3>

            <p>Karachi, Pakistan</p>

          </Card>

          <Card className="social-card">

            <h3>Connect With Me</h3>

            <div className="social-icons">

              <GithubOutlined />

              <LinkedinOutlined />

            </div>

          </Card>

        </div>

      </div>

    </section>
  );
}

export default Contact;