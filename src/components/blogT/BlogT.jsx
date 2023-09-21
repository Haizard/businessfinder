import React from 'react';
import Articles from '../reusable1/article/Article'; // Correct relative path
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9 } from './imports';
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

     <Articles imgurl={blog1}/>

    </div>

    </div>
    </>
  )
}

export default BlogT
