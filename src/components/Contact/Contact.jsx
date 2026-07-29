// 

import React, { useState } from "react";
import "./Contact.css";

import {
  Card,
  Form,
  Input,
  Button,
  Upload,
  Modal,
  notification,
} from "antd";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  UploadOutlined,
  DownloadOutlined,
  SendOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

function Contact() {
  const [form] = Form.useForm();

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const onFinish = (values) => {
    setFormData(values);
    setModalOpen(true);
  };

  const submitForm = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setModalOpen(false);

      notification.success({
        message: "Message Sent Successfully 🚀",
        description:
          "Thank you for contacting me. I will reply as soon as possible.",
        placement: "topRight",
      });

      form.resetFields();
    }, 1500);
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <h2>Let's Work Together</h2>

        <p>
          Have an idea, project or freelance opportunity?
          I'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <Card className="contact-form-card">

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >

            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Muhammad Hussain"
              />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Enter a valid email",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="example@email.com"
              />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please write your message",
                },
              ]}
            >
              <TextArea
                rows={6}
                placeholder="Tell me about your project..."
              />
            </Form.Item>

            <Form.Item
              label="Attach Resume (Optional)"
              name="resume"
            >
              <Upload beforeUpload={() => false}>
                <Button
                  icon={<UploadOutlined />}
                >
                  Upload Resume
                </Button>
              </Upload>
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              icon={<SendOutlined />}
            >
              Send Message
            </Button>

          </Form>

        </Card>

        {/* Right Side */}

        <div className="contact-info">

          <Card className="info-card">

            <MailOutlined className="info-icon" />

            <h3>Email</h3>

            <a
              href="mailto:mdhussain.dev00@gmail.com"
            >
              mdhussain.dev00@gmail.com
            </a>

          </Card>

          <Card className="info-card">

            <PhoneOutlined className="info-icon" />

            <h3>Phone</h3>

            <a href="tel:+923482237414">
              +92 348-2237414
            </a>

          </Card>

          <Card className="info-card">

            <EnvironmentOutlined className="info-icon" />

            <h3>Location</h3>

            <p>Karachi, Pakistan</p>

          </Card>

          <Card className="social-card">

            <h3>Connect With Me</h3>

            <div className="social-icons">

              <a
                href="https://github.com/Mdhussaindev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-hussain-khan-b3b2203b3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined />
              </a>

            </div>

            <Button
              className="resume-btn"
              icon={<DownloadOutlined />}
              href="/resume.pdf"
              target="_blank"
            >
              Download Resume
            </Button>

          </Card>

        </div>

      </div>

      <Modal
        title="Confirm Submission"
        open={modalOpen}
        onOk={submitForm}
        onCancel={() => setModalOpen(false)}
        okText="Send"
        cancelText="Cancel"
        confirmLoading={loading}
      >

        <p>
          <strong>Name:</strong> {formData.name}
        </p>

        <p>
          <strong>Email:</strong> {formData.email}
        </p>

        <p>
          Are you sure you want to send this message?
        </p>

      </Modal>

    </section>
  );
}

export default Contact;