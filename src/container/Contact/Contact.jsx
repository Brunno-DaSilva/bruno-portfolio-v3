import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import ContactImage from "../../assets/images/contact_3d.png";
import { urlFor, client } from "../../client";
import { FiSend } from "react-icons/fi";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact">
      <div className="contact__title">
        <h1>Contact</h1>
      </div>
      <div className="contact__main">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="main__left-col"
        >
          <div className="contact__img_layer">
            <Tilt
              className="Tilt"
              options={{ max: 20, perspective: 1000, speed: 100 }}
              style={{ height: 400, width: 400 }}
            >
              <img src={ContactImage} alt="Images contact" />
            </Tilt>
          </div>
        </motion.div>
        <div className="main__right-col">
          <form>
            <div className="app__flex">
              <label for="username" className="label">
                Full Name
              </label>
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                id="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <label for="email" className="label">
                Email
              </label>
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <label for="message" className="label">
                Message
              </label>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                id="message"
                onChange={handleChangeInput}
              />
            </div>
            <button className="p-text" onClick={handleSubmit}>
              {!loading ? (
                <span>
                  SEND <FiSend size={25} />
                </span>
              ) : (
                "Sending..."
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
