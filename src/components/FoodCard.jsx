import React from 'react'

const FoodCard = ({food}) => {
    console.log(food);
  return (
    <div>{
        food.map((item)=>
        <h1>{item.name}</h1>
        )
        }</div>
  )
}

export default FoodCard