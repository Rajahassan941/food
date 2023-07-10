import { React, useState, useEffect } from "react";
import { useParams,useNavigate, Link } from "react-router-dom";
import { LuIndianRupee } from 'react-icons/lu';
import { IoStarSharp } from 'react-icons/io5';


import "./viewcatogaries.css";
import Sidebar from "./Sidebar";

const ViewCategory = () => {
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
   <Link  style={{
                    textDecoration: "none",
                    color: "#8a8484",
                    maxWidth: "20px",
                  }} to={`/${viewFood.categorykey}/${viewFood.id}`}> <button >ADD</button></Link>
   </div>
  
  </div>
  </>):"choose catogary"
}
</div>
      

    </div>
  );
};

export default ViewCategory;

