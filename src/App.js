import React from 'react'
import './app.css'
import { BlogT, StartBusiness, Gallery, Hotel, MoneyList, Header, Navbar, BusinessOption, ListCompany, BusinessShowOf } from './components';
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
      <BusinessShowOf />
      <Hotel />
      <BusinessOption/>
      <Gallery />
      <MoneyList />
      </div>
      
    </div>
  )
  
}
   
//git 
export default App
