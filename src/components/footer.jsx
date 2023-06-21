import React from 'react'
import './Footer.css'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className='wrapper'>
          <a href="https://www.linkedin.com/in/rohan-sangle/"><AiFillLinkedin/></a>
          <a href="https://github.com/RohanSangle"><AiFillGithub/></a>
      </div>
      <div className='end'>
        <p>Crafted with <AiFillHeart/> by Rohan Sangle</p>
      </div>
    </>
  )
}

export default Footer