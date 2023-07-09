import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";
import Header from "./Header";
import "./viewcatogaries.css";
import Sidebar from "./Sidebar";

const ViewCategory = () => {
  const { categorykey } = useParams();
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
  <h6>{viewFood.name}</h6>
  <img src="{viewfood.image}" alt="" />
  </>):"null"
}
</div>
      

    </div>
  );
};

export default ViewCategory;

