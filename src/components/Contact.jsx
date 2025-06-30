import React, { useRef, useState } from 'react';
import '../styles/contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bqh2bdb',
      'template_yxg31t9',
      form.current,
      'b9e-y_6h3RiiKud6T'
    ).then(
      () => {
        setStatus('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        setStatus('Failed to send message. Try again.');
        console.error(error);
      }
    );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
