import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/crypto.png'
import IMG2 from '../../assets/pizza.png'
import IMG3 from '../../assets/ig.png'
import IMG4 from '../../assets/merch.png'
import IMG5 from '../../assets/hood.png'
import IMG6 from '../../assets/budget.png'
import IMG7 from '../../assets/quote.png'
const data=[{
  id:1,
  image:IMG1,
  title:'crypto Currency and Virtual visualization' ,
  github:'https://github.com/EsauKip/crypto-checker.git',
  demo:'https://esaukipcrypto-0a498c.netlify.app/'
},
{
  id:2,
  image:IMG2,
  title:'Pizza Inn' ,
  github:'https://github.com/EsauKip/Pizza-inn.git',
  demo:'https://esaukip.github.io/Pizza-inn/'
},
{
  id:3,
  image:IMG3,
  title:'Instagram Clone' ,
  github:'https://github.com/EsauKip/instagramclone.git',
  demo:'https://instagram-kip.herokuapp.com/'
},
{
  id:4,
  image:IMG4,
  title:'Merchandisers' ,
  github:'https://github.com/EsauKip/merchandisers.git',
  demo:'https://esaukip.github.io/merchandisers/'
},
{
  id:5,
  image:IMG5,
  title:'The Hood' ,
  github:'https://github.com/EsauKip/finder.git',
  demo:'https://thehood-kip.herokuapp.com/'
},
{
  id:6,
  image:IMG6,
  title:'Budgetting App' ,
  github:'https://github.com/EsauKip/Budgetting-app.git',
  demo:'https://esaukip.github.io/Budgetting-app'
},
{
  id:7,
  image:IMG7,
  title:'The Blog App' ,
  github:'https://github.com/EsauKip/Blog-post.git',
  demo:'https://blog-post-kip.herokuapp.com/'
}
]
const portfolio = () => {
  return (
    <section id="section">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        
         {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article className='portfolio__item'>
          <div key={id} className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cts">
          <a href={github} className='btn' >GitHub</a>
          <a href={demo} className='btn btn-primary' >Live Demo</a>
        </div>
        </article>
            )
          })
         }
       
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Instagram clone</h3>
          <div className="portfolio__item-cts">
          <a href="https://github.com/EsauKip/instagramclone.git" className='btn' target='_blank'>GitHub</a>
          <a href="https://instagram-kip.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Pizza Inn</h3>
          <div className="portfolio__item-cts">
          <a href="https://github.com/EsauKip/Pizza-inn.git" className='btn' target='_blank'>GitHub</a>
          <a href="https://esaukip.github.io/Pizza-inn/" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Merchandisers</h3>
          <div className="portfolio__item-cts">
          <a href="https://github.com/EsauKip/merchandisers.git" className='btn' target='_blank'>GitHub</a>
          <a href="https://esaukip.github.io/merchandisers/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>The Hood</h3>
          <div className="portfolio__item-cts">
          <a href="https://github.com/EsauKip/finder.git" className='btn' target='_blank'>GitHub</a>
          <a href="https://thehood-kip.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Budgetting App</h3>
          <div className="portfolio__item-cts">
          <a href="https://github.com/EsauKip/Budgetting-app.git" className='btn' target='_blank'>GitHub</a>
          <a href="https://esaukip.github.io/Budgetting-app/" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Blog post</h3>
          <div className="portfolio__item-cts">
          <a href="https://github.com/EsauKip/Blog-post.git" className='btn' target='_blank'>GitHub</a>
          <a href="https://blog-post-kip.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article> */}
        
      </div>
    </section>
  )
}

export default portfolio