import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiFigma} from 'react-icons/si'
const headerSocials = () => {
  return (
   
    <div className="hrader__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://dribble.com" target="_blank"><SiFigma/></a>
    </div>
  )
}

export default headerSocials