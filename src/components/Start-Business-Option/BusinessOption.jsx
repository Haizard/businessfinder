import React from 'react'
import BussinesCategoryList from './BussinesCategoryList'
import BusinessArticle from '../Start-Business-Option/business-list-render/BusinessArticle';
import './businessoption.css'

function BusinessOption() {
  const businesslist = BussinesCategoryList.map ((blog, index) => {
 
    return <div className="BussinesCategoryList"><BusinessArticle text={blog}/></div>
   } );
  
  return (
    <div>
      <h2 className="start_busines_option">Start a Business in Marietta Goergia</h2>
   
    {businesslist}

    </div>
  )
}

export default BusinessOption
