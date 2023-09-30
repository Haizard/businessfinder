import React from 'react'
import './app.css'
import { BlogT, StartBusiness, Gallery, Hotel, MoneyList, Header, Navbar, BusinessOption, ListCompany, BusinessShowOf, Footer } from './components';
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
      <Gallery />
      <BusinessOption/>
      <MoneyList />
      <Footer/>
      </div>
      
    </div>
  )
  
}
   
//git 
export default App
