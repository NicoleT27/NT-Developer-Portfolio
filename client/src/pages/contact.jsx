import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import "./contact.css";

function Contact() {
  return (
    <footer>
      <div className="contact-title">Contact Me</div>
      <form>
        <input type="text" id="name" name="name" placeholder="Name"></input>
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" Email"
        ></input>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
        ></input>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
        ></input>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
        ></textarea>
        <input type="submit" id="submit" value="Submit"></input>
      </form>
      <div className="contact-details">
        <div>
          Dont be Shy!
          <FaPhoneVolume />
        </div>
        <div>
          Fell Free to get in touch with me. I am always open to discussing new
          oppurtunities.
        </div>
      </div>
      {/* <div className="letter-image">
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title"></div>
            <div className="letter-context"></div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </div> */}
    </footer>
  );
}
export default Contact;
