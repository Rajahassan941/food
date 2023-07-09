import React from 'react'
import "./header.css"
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    <div className='main'>
        <div className="search">
        <div className="box">
        
          <input type="text" placeholder=' search food items...' /></div>
          
            
        </div>
        <div className="catogaries">
          <div className="veg">
            <button><img src="https://w7.pngwing.com/pngs/46/17/png-transparent-maple-leaf-leaf-shape-drawing-leafe-hat-leaf-color-thumbnail.png" alt="" />Pure Veg</button>
          </div>
          <div className="best">
            <button>Bestseller </button>
          </div>
        </div>
    </div>
  )
}

export default Header