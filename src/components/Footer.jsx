import React from 'react';
import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copy">&copy; {new Date().getFullYear()} Kaushal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
