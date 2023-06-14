import React from 'react'
import './Heading.css'


function Heading() {
  return (
    <>
    <div className='container'>
      <nav>
        <h1>Rohan Sangle</h1>
        <ul>
          <li><a href="#">About me</a></li>
          <li><a href="#">Achievements</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className='content'>
        <h2>Hi, I am Rohan Sangle</h2>
        <p>I am a undergraduate at PCCOE, pursuing B.Tech in Electronics & Telecommunication Engineering. I am also interested in the field of Web Development and have worked on a few projects in this field. I am currently looking for an internship in the field of Development and marketing.</p>
        <button type="submit">Get In Touch!</button>

      </div>
      
    </div>
    </>
  )
}

export default Heading