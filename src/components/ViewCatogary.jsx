import { React, useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { LuIndianRupee } from 'react-icons/lu';
import { IoStarSharp } from 'react-icons/io5';

import Viewitem from "./Viewitem"; 
import "./viewcatogaries.css";
import Sidebar from "./Sidebar";

const ViewCategory = () => {
  const navigate=useNavigate()
  const[button,setButton]=useState(false)
  const { categorykey } = useParams();
  console.log(categorykey);
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
  const viewFood = food.find((item) => item.categorykey == categorykey);
  return (
    <div className="container">

      <div className="childone"><Sidebar/></div>
<div className="childtwo">


{
  viewFood?
(
  <>
  <h3 style={{fontSize:"larger",width:"50%"}}>{viewFood.category}</h3>
  <div className="all">
  <div className="items">
  <img src={viewFood.image} alt="" />
  <h6 style={{fontSize:"small"}}>{viewFood.name}</h6>
  
   < LuIndianRupee/> {viewFood.price}
   <br />
   <br />
   <IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/> {viewFood.rating}
   </div>
   <div  className="btn">
   {/* <Link  style={{
                    textDecoration: "none",
                    color: "#8a8484",
                    maxWidth: "20px",
                  }} to={`/${viewFood.categorykey}/${viewFood.id}`}> */}
                     <button onClick={()=>setButton(true)} >ADD</button>
                     {/* </Link> */}
                  <Viewitem trigger={button} setTrigger={setButton}>
                    <img style={{marginTop:"20px"}} src={viewFood.image} alt="" />
                    <h3>{viewFood.name}</h3>
                    {viewFood.price}
                    <br />
                   <p style={{fontSize:"small",fontWeight:"light"}}>{viewFood.description}</p> 
                   <button onClick={()=>navigate('/order')}>ORDER</button>
                  </Viewitem>
   </div>
  
  </div>
  </>):"choose catogary"
}
</div>
      

    </div>
  );
};

export default ViewCategory;

