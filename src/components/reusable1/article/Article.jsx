import React from 'react';

function Articles({ imgurl }) {
  return (
    <div className='blog-poster'>
      <div className="img-box">
        <img src={imgurl} alt="blogimage" /> {/* Remove curly braces around imgurl */}
      </div>

      <div className="rate-box">

      </div>
    </div>
  );
}

export default Articles;
