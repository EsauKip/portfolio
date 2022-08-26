import React from 'react'
import './footer.css'
import{FaTwitter} from 'react-icons/fa'
import{SiDiscord} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>KIP</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com/Friendngetich" target="_blank"><FaTwitter/></a>
        <a href="https://discord.com/channels/@me" target="_blank"><SiDiscord/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Esau Kiprono. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer