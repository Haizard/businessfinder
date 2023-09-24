import React from 'react';
import './article.css';
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import ContentList from '../../blog_content/BlogContnet'


const stars = Array(5).fill(null).map((_, index) => (
    < AiFillStar className='star-icon' key={index}/>
));

const blogcontent = Array(5).fill(null).map((_, index) => (
  < ContentList  className='star-icon' key={index}/>
));

function Articles({ imgurl, apple_icon, business_name, city, phone_number, rate_icon, business_logo}) {
  
 
  
  
  return (
    <div className='blog_poster'>
      <div className="img_box">
        <img className='image_style' src={imgurl} alt="blogimage" /> {/* Remove curly braces around imgurl */}
        <div className="content">
    
            <div className="like_container">
            <span className="like_icon">{apple_icon}0</span>
            </div>

            
            <span className='businessname'>{blogcontent}</span>
            
            <span className='city'>{city}</span>

            <span className='phone_number'>{phone_number}</span>
            
        </div>

      </div>

      <div className="rate_box">
       <div className='rate_icon'>
         {stars}
       </div>
       <span className='business_logo'>{business_logo}</span>
      </div>
    </div>
  );
}

export default Articles;
