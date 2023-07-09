import { useState,useEffect } from "react";
import React from 'react'
import { Link } from "react-router-dom";
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

    const uniqueCategory = food.filter((product,index,array)=>array.findIndex ((p)=>p.category==food.category)==index)
    console.log(uniqueCategory);
   
    return (
      <div>
        <div className="block">
          <div className="section">
            {uniqueCategory.map((a)=><div key={a.id}>
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#8a8484",
                    maxWidth: "20px",
                  }}
                  to={`viewcatogary/${a.id}`}
                >
                  {a.category}
                  
                </Link>
                <br />
                <br />
                <br />
               
              </div>)}
  
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  };

export default Sidebar