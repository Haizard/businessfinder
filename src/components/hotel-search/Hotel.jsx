import React from 'react'
import './hotel.css'

import {FaMapMarkerAlt} from "react-icons/fa";
import {FaRegCalendarAlt} from "react-icons/fa";

function Hotel() {
  return (
    <div className='hotel_search_section'>
     <span className="hotel_search_section_title">Hotels in Marietta Goergia</span>

     <div className="searching_container">
        <span className="searching_container_title">Search place to stay</span>
        <button className='going_to_button'>< FaMapMarkerAlt className='map_icon'/> Going to</button>

        <div className="check_container">
          <button className='check_in'><FaRegCalendarAlt className='calend_icon'/>Check-in</button>
          <button className='check_out'><FaRegCalendarAlt className='calend_icon'/>Check-out</button>
        </div>

        <div className="bland_search_container">

          <div className="bland_span_container">
            <div className='hotel_bland'>
              <span className='bland_title'>Powered by</span>
              <span className='hotle_text_color'>hotels<span className='litter_link'>.com</span></span>
              
              </div>
          </div>

          <button type="search" name="search" id="search_box">Search</button>
        </div>
     </div>
    </div>
  )
}

export default Hotel
