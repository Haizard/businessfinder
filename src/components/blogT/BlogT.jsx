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

     <Articles imgurl={blog1} business_name='IHOP Restaurants and Dining in Marietta, Georgia' city='Marietta Georgia' phone_number='(770) 590-0425' rate_icon='' business_logo='' />
     <Articles imgurl={blog2}/>
     <Articles imgurl={blog3}/>
     <Articles imgurl={blog4}/>
     <Articles imgurl={blog5}/>
     <Articles imgurl={blog6}/>
     <Articles imgurl={blog7}/>
     <Articles imgurl={blog8}/>
     <Articles imgurl={blog9}/>
    </div>

    </div>
    </>
  )
}

export default BlogT
