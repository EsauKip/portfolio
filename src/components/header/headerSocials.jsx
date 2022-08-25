import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiFigma} from 'react-icons/si'
const headerSocials = () => {
  return (
   
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/esaukiprono/" ><BsLinkedin/></a>
        <a href="https://github.com/EsauKip" ><BsGithub/></a>
        <a href="https://www.figma.com/files/user/1037780111482601144?fuid=1037780111482601144" ><SiFigma/></a>
    </div>
  )
}

export default headerSocials