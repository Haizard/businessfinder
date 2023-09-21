import React from 'react';
import './article.css'
function Articles({ imgurl, business_name, city, phone_number, rate_icon, business_logo}) {
  return (
    <div className='blog_poster'>
      <div className="img_box">
        <img className='image_style' src={imgurl} alt="blogimage" /> {/* Remove curly braces around imgurl */}
        <div className="content">
            <span className='business_name'>{business_name}</span>
            
            <span className='city'>{city}</span>

            <span className='phone_number'>{phone_number}</span>
        </div>

      </div>

      <div className="rate-box">
       <span className='rate icon'>{rate_icon}</span>
       <span className='business_logo'>{business_logo}</span>
      </div>
    </div>
  );
}

export default Articles;
