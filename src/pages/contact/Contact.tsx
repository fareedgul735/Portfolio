import type { FC } from "react";
import { Input, Button, Tooltip, Form } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import style from "./Contact.module.css";
import emailjs from "emailjs-com";

interface keysType {
  firstname: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const onFinish = (values: keysType) => {
    emailjs
      .send(
        "service_eu0v5cb",
        "template_0rwk7t9",
        {
          firstName: values.firstname,
          email: values.email,
          message: values.message,
        },
        "xDpN_2vLkQWcM3n5t"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully ✅");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message ❌. Please try again.");
        }
      );
  };
  return (
    <div className={style.parent}>
      <div className={style.hireMe}>
        <h2>Hire Me</h2>
        <div className={style.underline}></div>
      </div>

      <div className={style.socialLinks}>
        <Tooltip title={"Github"} placement="left" color="cyan">
          <a
            href="https://github.com/account"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconBox}
          >
            <GithubOutlined className={style.icon} />
          </a>
        </Tooltip>
        <Tooltip title={"Linkedin"} placement="top" color="cyan">
          <a
            href="https://www.linkedin.com/in/fareed-khan-946329333/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BHFj1E3C%2FQWKjLNMC8j2IEQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconBox}
          >
            <LinkedinOutlined className={style.icon} />
          </a>
        </Tooltip>
        <Tooltip title={"Twitter"} placement="right" color="cyan">
          <a
            href="https://x.com/khan73986khan?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconBox}
          >
            <TwitterOutlined className={style.icon} />
          </a>
        </Tooltip>
      </div>

      <Form
        name="contact-form"
        layout="vertical"
        className={style.formContainer}
        onFinish={onFinish}
      >
        <div className={style.row}>
          <Form.Item
            label="Your Name"
            name="firstname"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
            className={style.formGroup}
          >
            <Input placeholder="Enter your name" className={style.input} />
          </Form.Item>

          <Form.Item
            label="Your Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
            className={style.formGroup}
          >
            <Input placeholder="Enter your email" className={style.input} />
          </Form.Item>
        </div>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
          className={style.formGroup}
        >
          <Input.TextArea
            placeholder="Write your message"
            rows={4}
            className={style.textarea}
          />
        </Form.Item>

        <Tooltip
          open
          placement="bottom"
          title={
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              Your message will be sent to my email
            </span>
          }
          color="cyan"
        >
          <Button type="primary" htmlType="submit" className={style.submitBtn}>
            SEND
          </Button>
        </Tooltip>
      </Form>
    </div>
  );
};

export default Contact;
