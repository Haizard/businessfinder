import React, { useState } from 'react';
import './header.css';

function DropdownButton() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown1">
      <div type='text' className="dropdown-button1" onClick={toggleDropdown}>
        All category
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-list1">
          <input type="search" name="" id="" />
          <li className='li1'>All category</li>
          <li className='li1'>Barber Shops</li>
          <li className='li1'>Beauty</li>
          <li className='li1'>Bike Trail</li>
          <li className='li1'>Church</li>
          <li className='li1'>First Responders</li>
          <li className='li1'>Fishing</li>
          <li className='li1'>Fitness</li>
          <li className='li1'>Food</li>
          <li className='li1'>Gym</li>
          <li className='li1'>Home Services</li>
          <li className='li1'>Roofing</li>
          <li className='li1'>Mental Health</li>
          <li className='li1'>Nature Trails</li>
          <li className='li1'>Overnight Stay</li>
          <li className='li1'>Parks</li>
          <li className='li1'>Photography</li>
          <li className='li1'>Pizza</li>
        </ul>
      )}
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <p className="text">
        List, Find, or Review Business in <br /> Marietta Georgia
      </p>
      <p className="text1">
        List your business in our directory for free or explore local attraction
      </p>

      <div className="inputsection">
        <input type="text" className="input" placeholder="what are you looking for?" />

        <div className="location">
          <p className="inpt">dar es salaam</p>
        </div>

        <DropdownButton /> {/* Include the DropdownButton component here */}
        
        <button className="input inputsearch" type="search" name="search" id="search-box" placeholder="search">
          search
        </button>
      </div>
    </div>
  );
}

export default Navbar;
