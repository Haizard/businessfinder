import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
     <p className='text'>List, Find, or Review Business in <br /> Marietta Georgia</p>
     <p className="text1">List your businessin our directory for free or explore local attraction</p>
     <div className="inputsection">
      <input type="text" className='input' placeholder='what are you looking for'/>
     
      <div className='location'>dar es salaam</div>
      
      <button className="option" >

      </button>
      <input className='input' type="search" name="search" id="search-box" placeholder='search'/>
     </div>
    </div>
  )
}

export default Navbar
