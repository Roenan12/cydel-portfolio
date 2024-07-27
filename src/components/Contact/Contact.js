import React, { useState } from "react";
import { contacts } from "../../constants/index";
import "./Contact.css";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-header">
          <button disabled>CONTACT US</button>
          <h1>Get in Touch</h1>
          <p>Fill out the form below to send us a message via email.</p>
        </div>
        <div className="wrapper">
          <div className="contact-container">
            <form className="contact-form">
              <p>Name</p>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Email</p>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>Message</p>
              <textarea
                row="10"
                placeholder="What's your message?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="send-button">
                Send Email
              </button>
            </form>
          </div>

          <div className="other-contacts">
            {contacts.map((items, index) => (
              <a href={items.href} target="_blank" rel="noreferrer" key={index}>
                <div className="contact-list">
                  <div className="contact-icon">{items.icon}</div>
                  <p className="contact-info">{items.info}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.98329691217083!2d120.69789111962491!3d15.016560475431648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f7852cd0ec5f%3A0x8d530e10e17561d!2sCydel%20Iron%20Works!5e0!3m2!1sen!2sph!4v1722074522061!5m2!1sen!2sph"
            width="600"
            height="450"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </section>
    </>
  );
}
