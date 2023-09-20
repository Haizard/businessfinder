import React from 'react'
import './navbar.css'


function MenuItems() {
  const MenuList = ["hi haitham", "hi haitham slehe", "haitham misape", "hi haizard"];
  return (
    <>
   <ul>
    <li>
      {MenuList.map((item)=> (
      <li className='list' key={item.id}>{item}</li>
      ))}
     
     
    </li>
   </ul>
    </>  
  )
}



function Navbar() {
  return (
    <>
     <div className='header'>
  
          <div className='logo'>MariettaGoergia.org</div>
          <div className='header-list'>
            <p><a href='#add your business'>add your business</a></p>

            <div className="dropdown">

              <p className='dropdown-button'><a href='#explore'>explore</a></p>

              <div className ="dropdown-menu">       
                <a href="#navbar">restaurant</a>
                <a href="#navbar">art & entertaiment</a>
                <a href="#navbar">nature trail</a>
                <a href="#navbar">find a hotel in marietta goergia</a>
                <a href="#navbar">short-term rentals in Marietta goergia </a>
                <a href="#navbar">about marrieta goergia</a>



              </div>
           
            </div>

            <p onClick = {MenuItems}><a href='#foreclosure on marietta goergia'>foreclosure on marietta goergia</a></p>
            <p><a href='#message'>message</a></p>
            <p><a href='#login'>login</a></p>
          </div>
     </div>
    </>
  )
}

export default Navbar
