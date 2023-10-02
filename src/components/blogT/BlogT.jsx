import React from 'react';
import Articles from '../reusable1/article/Article'; // Correct relative path
import ContentList from '../blog_content/BlogContnet';
import './blog.css'



function BlogT() {
 const bloglist = ContentList.map ((blog, index) => {
 
  return <div className=""><Articles key={index} imgurl={blog.img}  business_name={blog.businessname} city={blog.city} phone_number={blog.PhoneNumber} business_logo={blog.logo}/></div>
 } );

  return (
    <>
    <div className="blog">
    <div className="title">
    <p className='blog_text '>Discover Business in and Around Marietta Goergia</p>
    <p className='blog_text1'>Discover some of the most popular listings in Maritta based on user reviews and ratings.</p>
    </div>

    <div className="bussiness-blog">

     
      {bloglist}

    </div>

    </div>
    </>
  )
}

export default BlogT