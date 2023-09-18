import React from 'react'
import './app.css'
import { BlogT, BussFinder, Gallery, Header, Hotel, MoneyList, Navbar} from './components';
const App = () => {
  return (
    <div>
      <div className='app'>
      <Header />
      <Navbar />
      <BlogT />
      <BussFinder />
      <Gallery />
      <Hotel />
      <MoneyList />
      </div>
      
    </div>
  )
  
}
     
export default App
