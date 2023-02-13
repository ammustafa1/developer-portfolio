import React from 'react';
import './contact.css';

export default function Contact() {

  return (
    <>
      <div className="contactContainer" id="contactMe">
        <div className="sectionLabel">
          <span>Get in Touch!</span>
        </div>

        <form className='contactForm'>
          <div>
            <input
              type="text"
              className="contactFormInput"
              placeholder="What is Your Name?"
            ></input>
          </div>

          <div>
            <input
              type="email"
              className="contactFormInput"
              placeholder="E-Mail Address"
            ></input>
          </div>

          <div>
            <input
              type="text"
              className="contactFormInput"

              placeholder="Type Your Message"
            ></input>
          </div>

          <button className="btn">
            Send Message
          </button>

        </form>
      </div>
    </>
  );
}
