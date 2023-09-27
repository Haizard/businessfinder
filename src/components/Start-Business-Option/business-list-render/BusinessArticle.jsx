import './businessarticle.css'
import React from 'react'


function BusinessArticle ({text}) {
    
  return (
    <div className='business_list_section'>
      <div className="business_list">
        <span className="business_content_list">{text}</span>
      </div>
    </div>
  )
}

export default BusinessArticle
