import React from 'react'
import './startbusiness.css'
import StartBusinessArticle from './business_article/BusinessBlogArticle'
import businessAsset from'./BusinessAsset'
function StartBusiness() {
  const businesslist = businessAsset.map ((blog, index) => {
 
    return <div key={blog.img} className="BussinesCategoryList"><StartBusinessArticle img={blog.img} title={blog.title} date={blog.date} content={blog.content} readmore={blog.readmore}/></div>
   } );
  return (
          <div className='business_blog_container'>
            <h1 className="start_business">All About Marietta Georgia</h1>
            <h1 className="all_about">Browse the latest articles and tips from our blog.</h1>
            <div className='main_bussiness_blog'>
              {businesslist}
            </div>
          </div>
  )
}

export default StartBusiness;
