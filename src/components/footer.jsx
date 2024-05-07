import React from "react";
import{ useState, useEffect } from 'react';
import logo from '../assets/craftlogo.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    
    setCurrentYear(new Date().getFullYear());
  }, []); 
  return (
    <footer className="footer">
    <div className="footers">

   
      <div className="footer__contacts">
        <h4>Schools</h4>
        <p> Information</p>
        <p>About Us</p>
        <p>Become a Tutor</p>
        <p>Testimonial & Review</p>
      </div>
      <div className="footer__links">
        <h4> Links</h4>
        <ul>
          <li><a href="/">Home education</a></li>
          <li><a href="/toturial">Adult Learning</a></li>
          <li><a href="/box">Expat students</a></li>
          <li><a href="/contact">Helpful Links</a></li>
        </ul>
      </div>
      <div className="footer__links">
        <h4> Links</h4>
        <ul>
          <li><a href="/">Schools</a></li>
          <li><a href="/toturial">Staying safe online</a></li>
          
        </ul>
      </div>
      <hr></hr>
      <div className="footer__resources">
        <img src={logo} alt="logo"/>
        <ul>
          <li><a href="/faq">Kigali - Rwanda KG 02 ST, Umutuzo street</a></li>
          <li><a href="/blog">education@wekraft.com</a></li>
          <li><a href="/terms">+250 874 4783 38(Support)</a></li>
        </ul>
      </div>
      </div>
      <div className="delayed">
      <div className="footer__copy">
      <p>copyright &copy; {currentYear} wekraft all deserved</p>
      <div className="icons">
        <InstagramIcon className="icon"/>
        <TwitterIcon className="icon"/>
        <FacebookIcon className="icon"/>
       
      </div>
      </div>
      </div>
    
      
    </footer>
  );
};

export default Footer;