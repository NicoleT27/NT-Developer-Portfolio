import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaRegAddressCard } from "react-icons/fa6";
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
        <div>Dont be Shy!</div>
        <div>
          Fell Free to get in touch with me. I am always open to discussing new
          oppurtunities.
        </div>
        <div className="icons">
          <FaPhoneVolume />
          <TfiEmail />
          <FaRegAddressCard />
        </div>
        <div className="phone-titles">
          <div>Call Me!</div>
          <div>407-616-4437</div>
        </div>
        <div className="email-titles">
          <div>Write to Me!</div>
          <div>nicolejoan9@yahoo.com</div>
        </div>
        <div className="contact-titles">
          <div>Something</div>
          <div>Something else</div>
        </div>
      </div>
    </footer>
  );
}
export default Contact;
