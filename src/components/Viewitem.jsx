import React, { useState ,useEffect} from 'react'
import { RxCross2 } from 'react-icons/rx';
import { useParams } from 'react-router-dom'
import "./viewitem.css"

const Viewitem = (props) => {
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
  
  return (props.trigger)?(
    
    



<div className='popup'>
  <div className="popup-inner">
    <button onClick={()=>props.setTrigger(false)}><RxCross2/></button>

    
    {props.children}
  </div>

</div>




):''
}


export default Viewitem