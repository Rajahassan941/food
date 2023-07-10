import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Order = () => {

  const  Ordered=()=>{
        alert('order confirmed')
  }
  return (
    <div className='order-main'>
        <FloatingLabel
        controlId="floatingInput"
        label="name"
        className="mb-3"
      >
        <br />
        <Form.Control type="text" placeholder="name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="phone number">
        <Form.Control type="text" placeholder="phone number" />
      </FloatingLabel>
      <br />
      <FloatingLabel
        controlId="floatingInput"
        label="address"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="address" />
      </FloatingLabel>
      <br />
      <Link to={'/'}>
      <Button onClick={()=>Ordered()} variant="success">CONFIRM</Button>
      </Link>
      

    </div>
  )
}

export default Order