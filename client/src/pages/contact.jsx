import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <footer>
      <div className="contact-title">Contact Me</div>
      <form action="/" method="POST" id="contactForm">
        <input type="text" id="name" name="name" placeholder="Name"></input>
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" Email"
          required
        ></input>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          required
        ></input>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
        ></input>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
        ></textarea>
        <button type="submit" id="submit" value="Submit">
          Submit
        </button>
      </form>
      <div id="responseMessage">Message has been sent </div>
        <div className="contact-details">
          <div className="contact-intro">
            Dont be Shy!
            <br></br>
            Fell Free to get in touch with me. I am always open to discussing
            new oppurtunities.
          </div>
          <div className="icons">
            <FaPhoneVolume />
            <TfiEmail />
            <BsLinkedin />
            <FaGithub />
          </div>
          <div className="phone-titles">
            <div>Call Me!</div>
            <a href="tel:+1(407)-616-4437">407-616-4437</a>
          </div>
          <div className="email-titles">
            <div>Write to Me!</div>
            <a href="mailto:nicolejoan9@yahoo.com">nicolejoan9@yahoo.com</a>
          </div>
          <div className="contact-titles">
            <div>Lets Connect!</div>
            <a href="https://www.linkedin.com/in/nicolet27/">
              https://www.linkedin.com/in/nicolet27/
            </a>
            <div className="contact2-titles">
              <a href="https://github.com/NicoleT27">
                https://github.com/NicoleT
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
}
export default Contact;
