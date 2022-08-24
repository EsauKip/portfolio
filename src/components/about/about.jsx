import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscNewFolder} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5> 
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="abou__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
          </div>
          <div className="about__card">
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2 clients</small>
            </article>
          </div>
          <div className="about__card">
            <article className="about__card">
              <VscNewFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Projects</small>
            </article>
          </div>
          <p>
          
I am passionate about technology and for me to be part of the technology, I learned programming that has pushed me to explore many things that includes and web based application. Being part of the developer’s community made me to be open-minded and optimistic on what that I do knowing my ideas are put into use. I am able to effectively self-manage during independent projects as well as collaborate in a team setting.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default about