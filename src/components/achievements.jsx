import React from 'react'
import './Achievements.css'
import flag from '../images/flag.jpg'


function Achievements() {
  return (
    <>
      <div className='me2' id='Achievements'>
        <h2 className='achieve'>Achievements</h2>
        <h1 className='bigachieve'>Some doings of me</h1>
        {/* <img className='flaggif' src="https://images.squarespace-cdn.com/content/v1/615af914e76082704c010cbc/53eb29e1-6fb6-43bb-873b-01b2980c9589/Katana_Grave_Contrast_Morning_46.gif" alt="" /> */}
        
      </div>

      <div className='flags'>
        <img className='flag1' src={flag} alt="" onClick={()=>{}}/>
        <img className='flag2' src={flag} alt="" onClick={()=>{}}/>
        <img className='flag3' src={flag} alt="" onClick={()=>{}}/>
      </div>
    </>
  )
}

export default Achievements