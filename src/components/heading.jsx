import React from 'react'
import './Heading.css'
// import rs from '../images/RS.png'


function Heading() {
  return (
    
    <div className='container'>
      <nav>
      {/* <img className='logo' src={rs} alt="logo" /> */}
        <h1>Rohan Sangle</h1>
        <ul>
          <li><a href="#About">About me</a></li>
          <li><a href="#Achievements">Achievements</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      
    </div>
    
  )
}

export default Heading