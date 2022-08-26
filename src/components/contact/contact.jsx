import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import{FaWhatsappSquare} from 'react-icons/fa'
const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kipronoesau28@gmail.com</h5>
            <a href="mailto:kipronoesau28@gmail.com" target="_blank">Send The Message</a>
          </article>
          
          <article className='contact__option'>
          <FaWhatsappSquare className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+254700768455</h5>
            <a href="https://api.whatsapp.com/send?phone=254700768455" target='_blank'>Send  Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Type Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact