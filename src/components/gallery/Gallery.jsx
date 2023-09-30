import React from 'react'
import './gallery.css'
import { blog1, blog2, blog3, blog5, blog6, blog9 } from '../blogT/imports'
function Gallery() {
  return (
    <div>
     <div className="gallary_title">
      <span className="gallery_title1">Explore the Beautiful City of Marietta Goergia</span>
      <span className="gallery_content">Discover & connect with great places in and around Cobb Country</span>
           
        <div class="grid-container">
            <div class="grid-item item1"><img className='img_style' src={blog1} alt="" /><span className="garary_content"> Fitness</span></div>
            <div class="grid-item item2"><img className='img_style' src={blog5} alt="" /><span className="garary_content"> Pizza</span></div>
            <div class="grid-item item3"><img className='img_style' src={blog9} alt="" /><span className="garary_content"> Wedding</span></div>  
            <div class="grid-item item4"><img className='img_style' src={blog3} alt="" /><span className="garary_content"> Bike Trail</span></div>
            <div class="grid-item item5"><img className='img_style' src={blog2} alt="" /><span className="garary_content"> Mental Health</span></div>
            <div class="grid-item item6"><img className='img_style' src={blog6} alt="" /><span className="garary_content"> Fishing</span></div>
        </div>
             
     </div>
    </div>
  )
}

export default Gallery
