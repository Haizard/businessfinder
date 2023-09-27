import React from 'react'
import './app.css'
import { BlogT, StartBusiness, Gallery, Hotel, MoneyList, Header, Navbar, BusinessOption } from './components';
const App = () => {
  return (
    <div>
      <div className='app'>
      <Navbar />
      <Header />
      <BlogT />
      <BusinessOption/>
      <StartBusiness />
      <Gallery />
      <Hotel />
      <MoneyList />
      </div>
      
    </div>
  )
  
}
   
//git 
export default App
