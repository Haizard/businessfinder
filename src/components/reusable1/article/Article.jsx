import React from 'react';
import './article.css';
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart"

function Articles({ imgurl, business_name, city, phone_number, rate_icon, business_logo }) {
  const stars = Array(5).fill(null).map((_, index) => (
    <AiFillStar className='star-icon' key={index} />
  ));

  return (
    <div className='blog_poster'>
      <div className="img_box">
        <img className='image_style' src={imgurl} alt="blogimage" />
        <div className="content">
          <div className="like_container">
            <span className="like_icon"><AiFillHeart className='heart-icon'  />0</span>
          </div>
          <span className='businessname'>{business_name}</span>
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
