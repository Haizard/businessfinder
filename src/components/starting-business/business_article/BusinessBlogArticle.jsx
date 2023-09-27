import React from 'react'
import './businessblogarticle.css'
import {AiOutlineRight} from '@react-icons/all-files/ai/AiOutlineRight'
function StartBusinessArticle({img, date, title, content, readmore}) {
   
  return (

    <div> 
      
        <div className="blog_section">
          <img className='img_box1' src={img} alt="blogimage" />
          
          <div className="content_container">
            <span className="date_box">{date}</span>
            <h1 className="title_box">{title}</h1>
            <p className="content_box">{content.substring(0, 50)}</p>
            <div className="readmore_link">
              <span className="Read_More">{readmore} </span>
             <span className="chevron_righ"><AiOutlineRight className="chevron_right"/></span> 
            </div>
          </div>
      </div>
        
    </div>
  )
}

export default StartBusinessArticle;
