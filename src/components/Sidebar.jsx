import { useState, useEffect } from "react";
import React from 'react'
import { Link ,useNavigate} from "react-router-dom";
import "./sidebar.css"


const Sidebar = () => {

  const [food, setFood] = useState([]);

  const getfood = async () => {
    await fetch("/food.json").then((data) => {
      data.json().then((result) => {
        setFood(result.food_items);

      });
    });
  };


  useEffect(() => {
    getfood();
  }, []);
const navigate=useNavigate()

  return (
    <div>
      <div className="block">
        <div className="section">
          {food
            .reduce((uniqueCategories, currentCategory) => {
              if (!uniqueCategories.find(c => c.category === currentCategory.category)) {
                uniqueCategories.push(currentCategory);
              }
              return uniqueCategories;
            }, [])
            .map((a) => (
              <div key={a.category}>

                <button className="btn" onClick={()=>navigate(`/${a.categorykey}`)}> 
               
                {a.category}
                 </button>
                
                <br />
                <br />
                <br />
              </div>
            ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar