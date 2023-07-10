import React, { useState ,useEffect} from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom'

const Viewitem = () => {
  const {id}=useParams()
  const [food, setFood] = useState([]);
  const getFood = async () => {
    await fetch("/food.json").then((data) => {
      data.json().then((result) => {
        setFood(result.food_items);
      });
    });
  };
  useEffect(() => {
    getFood();
  }, []);
  const viewFood = food.find((item) => item.id == id);
  
  return (
    <>
    
{
viewFood?(
  <div className="container">
  <div className="childone"><Sidebar/></div>
  <div className="childtwo">
  </div>
  </div>
):'null'
}
</>
  )
}

export default Viewitem