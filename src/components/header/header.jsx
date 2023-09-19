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
      <button className="dropdown-button1" onClick={toggleDropdown}>
        All category
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-list1">
          <input type="search" name="" id="" />
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
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
