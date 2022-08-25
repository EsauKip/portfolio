import React from 'react'
import './services.css'
import{BsCheckAll} from'react-icons/bs'
const services = () => {
  return (
   <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX</h3>

        </div>
        <ul className="service__list">
          <li>
            <BsCheckAll className='service__list-icon'/>
             <p>Figma</p></li>
          <li>
          <BsCheckAll className='service__list-icon'/>
            <p>Adobe</p></li>
          <li>
          <BsCheckAll className='service__list-icon'/>
            <p>Dribble</p></li>
        </ul>
      </article>
      
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>

        </div>
        <ul className="service__list">
          <li>
            <BsCheckAll className='service__list-icon'/>
             <p>Frontend</p></li>
          <li>
          <BsCheckAll className='service__list-icon'/>
            <p>Backend</p></li>
          <li>
          <BsCheckAll className='service__list-icon'/>
            <p>Database</p></li>
        </ul>
      </article>
    </div>
   </section>
  )
}

export default services