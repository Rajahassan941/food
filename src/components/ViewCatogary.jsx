import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";
import Header from "./Header";
import "./viewcatogaries.css";
import Sidebar from "./Sidebar";


const ViewCatogary = () => {
  const param = useParams();
  console.log(param.categorykey);
  const [food, setFood] = useState([]);
  const getfood = async () => {
    await fetch("/food.json").then((data) => {
      data.json().then((result) => {
        setFood(result.food_items);
        console.log(`food${food}`);
      });
    });
  };

  useEffect(() => {
    getfood();
  }, []);

  const viewfood =food.find(item=>item.categorykey== param.categorykey);
  console.log(viewfood);

  return (
    <div className="container">

      <div className="childone"><Sidebar/></div>
<div className="childtwo">

{
  viewfood?
(
  <>
  <h6>{viewfood.name}</h6>
  <img src="{viewfood.image}" alt="" />
  </>):'null'
}
</div>
      

    </div>
  );
};

export default ViewCatogary;
