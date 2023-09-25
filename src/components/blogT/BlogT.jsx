import React from 'react';
import Articles from '../reusable1/article/Article'; // Correct relative path
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9 } from '../blog_content/BlogContnet';
import ContentList from '../blog_content/BlogContnet';
import './blog.css'



function BlogT() {
 const bloglist = ContentList.map ((blog, index) => (
  <div className=""><Articles imgurl={blog.img}  business_name={blog.businessname} city={blog.city} phone_number={blog.PhoneNumber}/></div>
  ));

  return (
    <>
    <div className="blog">
    <div className="title">
    <p className='text'>Discover Business in and Around Marietta Goergia</p>
    <p className='text1'>Discover some of the most popular listings in Maritta based on user reviews and ratings.</p>
    </div>

    <div className="bussiness-blog">

    {/* <div className=""><Articles imgurl={blog1} business_name='IHOP Restaurants and Dining in Marietta, Georgia' city='Marietta Georgia' phone_number='(770) 590-0425' rate_icon='' business_logo=''  /></div> */}
    {/* <div className=""><Articles imgurl={blog2} /></div>  */}
     
      {bloglist}
     {/* <div className=""><Articles imgurl={blog3}/></div>
     <div className=""><Articles imgurl={blog4}/></div>
    <div className=""><Articles imgurl={blog5}/></div> 
    <div className=""><Articles imgurl={blog6}/></div> 
     <div className=""><Articles imgurl={blog7}/></div>
    <div className=""><Articles imgurl={blog8}/></div> 
     <div className=""><Articles imgurl={blog9}/></div> */}
    </div>

    </div>
    </>
  )
}

export default BlogT