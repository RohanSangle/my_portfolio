import React from 'react'
import './Homepage.css'
import bgHome from '../images/bg-home.png'

function Homepage() {
  return (
    <>
    <section>
      <div className='content'>
          <h2 className='homename'>Rohan Sangle</h2>
          <h1>Minimalist Entrepreneur and Developer</h1>
          <p>I am a undergraduate at PCCOE, pursuing B.Tech in Electronics & Telecommunication Engineering. I am also interested in the field of Web Development and have worked on a few projects in this field. I am currently looking for an internship in the field of Development and marketing.</p>
      </div>

      <div className='pfpimage'>
        <img src={bgHome} alt='Rohan Sangle' />
      </div>
    </section>
    </>
  )
}

export default Homepage