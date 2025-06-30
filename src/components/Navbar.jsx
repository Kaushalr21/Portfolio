// Navbar hide/show on scroll
import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav className={`navbar ${visible ? 'show' : 'hide'}`}>
      {/* Your existing navbar content */}
      <div className="navbar-container">
        <div className="navbar-logo">Portfolio</div>
        
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Projects</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
        
      </div>
    </nav>
  );
}