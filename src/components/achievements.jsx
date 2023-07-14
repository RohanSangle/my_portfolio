import React, {useState}  from 'react'
import './Achievements.css'
import flag from '../images/flag.jpg'
import Flagone from './Flagone'
import Flagtwo from './Flagtwo'
import Flagthree from './Flagthree'


function Achievements() {
  const [flag1confirmed, setflag1confirmed]= useState(false);
  const [flag2confirmed, setflag2confirmed]= useState(false);
  const [flag3confirmed, setflag3confirmed]= useState(false);

  return (
    <>
  
      {(!flag1confirmed && !flag2confirmed && !flag3confirmed) && (
        <>
        <div className='me2' id='Achievements'>
          <h2 className='achieve'>Achievements</h2>
          <h1 className='bigachieve'>Some doings of me</h1>
          {/* <img className='flaggif' src="https://images.squarespace-cdn.com/content/v1/615af914e76082704c010cbc/53eb29e1-6fb6-43bb-873b-01b2980c9589/Katana_Grave_Contrast_Morning_46.gif" alt="" /> */}
          
        </div>

        <div className='flags'>
          <img className='flag' src={flag} alt="" onClick={()=>setflag1confirmed(true)}/>
          <img className='flag' src={flag} alt="" onClick={()=>setflag2confirmed(true)}/>
          <img className='flag' src={flag} alt="" onClick={()=>setflag3confirmed(true)}/>
        </div>
        </>
      )}
      {flag1confirmed && <Flagone setflag1confirmed={setflag1confirmed} />}
      {flag2confirmed && <Flagtwo setflag2confirmed={setflag2confirmed} />}
      {flag3confirmed && <Flagthree setflag3confirmed={setflag3confirmed} />} 

    </>
  )
}


export default Achievements