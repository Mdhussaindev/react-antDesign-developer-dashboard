import "./Testimonials.css";

import { Card, Rate, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const reviews = [
  {
    name: "John Smith",
    role: "Frontend Client",
    review:
      "Muhammad delivered a clean, responsive and modern React website. Great communication and excellent work!",
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Client",
    review:
      "Professional developer with strong React skills. The project was completed before the deadline.",
  },
  {
    name: "Ali Khan",
    role: "Freelance Client",
    review:
      "Highly recommended! Beautiful UI, responsive design and very easy to work with.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <div className="section-title">
        <h2>Client Testimonials</h2>

        <p>
          Feedback from clients and collaborators about my work.
        </p>
      </div>

      <div className="testimonial-grid">

        {reviews.map((item, index) => (
          <Card className="testimonial-card" key={index}>

            <Avatar
              size={70}
              icon={<UserOutlined />}
            />

            <Rate disabled defaultValue={5} />

            <p className="review">
              "{item.review}"
            </p>

            <h3>{item.name}</h3>

            <span>{item.role}</span>

          </Card>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;