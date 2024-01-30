import React, {useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./contact.css";
import "./contact";



// const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
// const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
// const emailUserId = import.meta.env.VITE_EMAIL_USER_ID;


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailServiceId,
        emailTemplateId,
        form.current,
        emailUserId
      )
      .then(
        (result) => {
          e.target.reset();
         const responseMessage = document.getElementById("responseMessage");
    const newMessage = "Message has been sent!";
    responseMessage.textContent = newMessage;
    responseMessage.style.display = "block";

      setTimeout(() => {
        responseMessage.style.display = "none";
      }, 4000);
        },
        (error) => {
          const responseMessage = document.getElementById("responseMessage");
          const newMessage = "Unable to send Message, Please Try Again!";
          responseMessage.textContent = newMessage;
          responseMessage.style.display = "block";

          setTimeout(() => {
            responseMessage.style.display = "none";
          }, 4000);
        }
      );  
  };

  return (
    <footer>
      <div className="contact-title">Contact Me</div>
      <form ref={form} onSubmit={sendEmail} id="contactForm">
        <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder="Name"
        ></input>
        <input
          type="email"
          id="user_email"
          name="user_email"
          placeholder=" Email"
          required
        ></input>
        <input
          type="tel"
          id="user_number"
          name="user_number"
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
        <input type="submit" id="submit" name="submit" value="Submit" />
      </form>
      <div id="responseMessage"></div>
      <div className="contact-details">
        <div className="contact-intro">
          Dont be Shy!
          <br></br>
          Fell Free to get in touch with me. I am always open to discussing new
          oppurtunities.
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
