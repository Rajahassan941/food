import { useState, useEffect } from "react";
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
              <div key={a.id}>
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
              </div>
            ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar