import React from 'react'
import './hotel.css'
function Hotel() {
  return (
    <div className='hotel_search_section'>
     <span className="hotel_search_section_title">Hotels in Marietta Goergia</span>

     <div className="searching_container">
        <span className="searching_container_title">Search place to stay</span>
        <button className='going_to_button'> going to</button>

        <div className="check_container">
          <button className='check_in'> check in</button>
          <button className='check_out'>check out</button>
        </div>

        <div className="bland_search_container">
          <span className='hotel_bland'>power by <br /> <span className='hotle_text_color'>hotels...</span> </span>

          <button type="search" name="search" id="search_box">search</button>
        </div>
     </div>
    </div>
  )
}

export default Hotel
