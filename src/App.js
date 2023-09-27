import React from 'react'
import './app.css'
import { BlogT, StartBusiness, Gallery, Hotel, MoneyList, Header, Navbar, BusinessOption, ListCompany } from './components';
const App = () => {
  return (
    <div>
      <div className='app'>
      <Navbar />
      <Header />
      <BlogT />
      <BusinessOption/>
      <StartBusiness />
      <ListCompany />
      <Gallery />
      <Hotel />
      <MoneyList />
      </div>
      
    </div>
  )
  
}
   
//git 
export default App
