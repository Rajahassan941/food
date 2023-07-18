import React from 'react'
import Sidebar from './Sidebar'
import ViewCatogary from './ViewCatogary'
import "./home.css"

const Home = () => {
  return (
    <div>
     
      <div className="container">
        <div className="childone">
        <Sidebar/>
        </div>
        <div className="childtwo"><ViewCatogary/></div>
      </div>
      
      
      
    </div>
  )
}

export default Home