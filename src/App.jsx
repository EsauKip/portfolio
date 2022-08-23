import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/work/services'
import Portfolio from './components/portfolio/portfolio'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Footer/>
        <Contact/>
    </>
  )
}

export default App