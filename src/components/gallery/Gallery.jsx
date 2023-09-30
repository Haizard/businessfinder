import React from 'react'
import './gallery.css'
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9 } from '../blogT/imports'
function Gallery() {
  return (
    <div>
     <div className="gallary_title">
      <span className="gallery_title1">Explore the Beautiful City of Marietta Goergia</span>
      <span className="gallery_content">Discover & connect with great places in and around Cobb Country</span>

      <div className="gallery_pic_section">
          
          <div className="gallery_pic_container">
       
             <div className="gallary_container1">
                  <img className='img_pic' src={blog1} alt="" />
              <div className="content_box2">
                <span className="text">hi there</span>
              </div>
             </div>
             
          </div>

      </div>   

     </div>
    </div>
  )
}

export default Gallery
