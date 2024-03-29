import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id="experience">
      <h5>The skills I Have</h5>
      <h2>My Experience</h2>

    <div className="container experience__container">
    
      <div className="experience__frontend">
          
      <h3>Frontend Development</h3>
        <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div>  <h4>HTML</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
          <div><h4>CSS</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div>  <h4>JavaScript</h4>
          <small className="text-light">Intermediate</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div> <h4>Angular</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
          <div><h4>Bootstrap</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div> <h4>React</h4>
          <small className="text-light">Intermediate</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div> <h4>Version Control</h4>
          <small className="text-light">Experienced</small></div>
          </article>
        
        
        </div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
          <div><h4>Flask</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
          <div><h4>Django</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div>  <h4>SQL</h4>
          <small className="text-light">Intermediate</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
          <div><h4>PosgreSQL</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
          <div><h4>REST API</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div> <h4>PHP</h4>
          <small className="text-light">Basic</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
          <div><h4>MYSQL</h4>
          <small className="text-light">Basic</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div> <h4>Python</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div> <h4>Rest framework</h4>
          <small className="text-light">Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='icon'/>
        <div> <h4>Heroku</h4>
          <small className="text-light">Experienced</small></div>
          </article>
        </div>
      </div>
    

    </div>

    </section>
  )
}

export default experience