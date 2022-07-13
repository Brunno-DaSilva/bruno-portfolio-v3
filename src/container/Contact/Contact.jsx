import React, { useState, useRef, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import ContactImage from "../../assets/images/contact_3d.png";
import { urlFor, client } from "../../client";
import { FiSend, FiInfo } from "react-icons/fi";
import { ImBlocked } from "react-icons/im";

import ThankYouIconTwo from "../../assets/images/thank-you-icon-two.gif";

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

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [userFocus, setUserFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);
  const [messageCharCount, setMessageCharCount] = useState(0);

  const contactRef = useRef();

  useEffect(() => {
    contactRef.current.focus();
  }, []);

  const handleChangeInput = (e) => {
    const charLimit = 200;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (message.length < charLimit) {
      setMessageCharCount(message.length + 1);
    } else {
      setMessageError("Message must be smaller than char");
    }
  };

  const emailValidation = () => {
    const emailRegex = new RegExp(
      "(?=[a-z0-9@.!#$%&'*+/=?^_`{|}~-]{6,254})(?=[a-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@)[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?=[a-z0-9-]{1,63}.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+(?=[a-z0-9-]{1,63})[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
      "gm"
    );

    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Type a valid email address");
    }
  };

  const nameValidation = () => {
    if (username === undefined) {
      setNameError("Name can't be empty");
    } else {
      setNameError("");
    }
  };

  const messageValidation = () => {
    if (message === "") {
      setMessageError("Message can't be empty");
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

  console.log("messageCharCount", messageCharCount);

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
          {!isFormSubmitted ? (
            <form>
              <div className="app__flex">
                <label htmlFor="username" className="label">
                  Full Name
                </label>
                <input
                  className="p-text outline-green"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  id="username"
                  ref={contactRef}
                  value={username}
                  onChange={handleChangeInput}
                  onFocus={() => {
                    setUserFocus(true);
                  }}
                  onBlur={() => {
                    nameValidation();
                    setUserFocus(false);
                  }}
                  required
                  aria-required="true"
                  aria-describedby="usernote"
                  autocomplete="off"
                />

                <span className="contact__error">
                  <span
                    id="usernote"
                    className={userFocus ? "instructions" : "offscreen"}
                  >
                    <FiInfo /> Name can't be empty Enter your full name.{" "}
                  </span>
                  {nameError ? <span>Error: {nameError}</span> : ""}
                </span>
              </div>
              <div className="app__flex">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  className="p-text"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  value={email}
                  type="email"
                  onChange={handleChangeInput}
                  onFocus={() => {
                    setEmailFocus(true);
                  }}
                  onBlur={() => {
                    emailValidation();
                    setEmailFocus(false);
                  }}
                  required
                  aria-required="true"
                  aria-describedby="emailnote"
                  autocomplete="off"
                />
                <span className="contact__error">
                  <span
                    id="emailnote"
                    className={emailFocus ? "instructions" : "offscreen"}
                  >
                    <FiInfo /> Email can't be empty Enter your full name.{" "}
                  </span>
                  {emailError ? <span> Error: {emailError}</span> : ""}
                </span>
              </div>

              <div className="app__flex message_textarea">
                <label htmlFor="message" className="label">
                  Message{" "}
                  <span className="textarea__char-counter">
                    {messageCharCount}/200
                  </span>
                </label>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  id="message"
                  onChange={handleChangeInput}
                  onFocus={() => {
                    setMessageFocus(true);
                  }}
                  onBlur={() => {
                    messageValidation();
                    setMessageFocus(false);
                  }}
                  maxLength={200}
                  required
                  aria-required="true"
                  aria-describedby="msgnote"
                  autocomplete="off"
                />
              </div>

              <span className="contact__error">
                <span
                  id="msgnote"
                  className={messageFocus ? "instructions" : "offscreen"}
                >
                  <FiInfo /> Email can't be empty Enter your full name.{" "}
                </span>
                {messageError ? <span>Error: {messageError}</span> : ""}
              </span>

              {/**sssssend */}
              {email === "" || username === "" || message === "" ? (
                <button
                  disabled
                  className="p-text btn-submit"
                  onClick={handleSubmit}
                >
                  {!loading ? (
                    <span>
                      SEND <ImBlocked size={25} />
                    </span>
                  ) : (
                    <span>Sending...</span>
                  )}
                </button>
              ) : (
                <button className="p-text btn-submit" onClick={handleSubmit}>
                  {!loading ? (
                    <span>
                      SEND <FiSend size={25} />
                    </span>
                  ) : (
                    <span>Sending...</span>
                  )}
                </button>
              )}
            </form>
          ) : (
            <div className="thank-you">
              <div className="icon">
                <img src={ThankYouIconTwo} alt="Party Icon - Form submitted" />
              </div>
              <h3 className="thank-you__text">
                Thank you for getting in touch!
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
