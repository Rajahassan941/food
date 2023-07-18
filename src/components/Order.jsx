import React from 'react'
import "./order.css"

import { Link } from 'react-router-dom';

const Order = () => {

  const  Ordered=()=>{
        alert('order confirmed')
  }
  return (
    <div className='order-main'>
      <div className="order-inner">
                <input type="text" placeholder='name' />
                <br />
                <input type="text" placeholder='phone number' />
                <br />
                <input type="text" placeholder='address' />
                <br />
                <input type="text" placeholder='locality' />
                <br />
                <input type="text" placeholder='pin' />
            </div>
            <br />
      <Link to={'/'}>
      <button className='btn-order' onClick={()=>Ordered()} variant="success">CONFIRM</button>
      </Link>
      

    </div>
  )
}

export default Order