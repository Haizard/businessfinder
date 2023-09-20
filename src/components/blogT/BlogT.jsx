import React from 'react';
import Articles from '../reusable1/article/Article'; // Correct relative path
import photos from '../blands/imports';
import './blog.css'


function BlogT() {
  return (
    <>
    <div className="blog">
    <div className="title">
    <p className='text'>Discover Business in and Around Marietta Goergia</p>
    <p className='text1'>Discover some of the most popular listings in Maritta based on user reviews and ratings.</p>
    </div>

    <div className="bussiness-blog">

     <Articles imgurl={photos.blog1}/>

    </div>

    </div>
    </>
  )
}

export default BlogT
