import React from 'react'
import './app.css'
import { BlogT, BussFinder, Gallery, Hotel, MoneyList, Header, Navbar } from './components';
const App = () => {
  return (
    <div>
      <div className='app'>
      <Navbar />
      <Header />
      <BlogT />
      <BussFinder />
      <Gallery />
      <Hotel />
      <MoneyList />
      </div>
      
    </div>
  )
  
}
   
//git 
export default App
