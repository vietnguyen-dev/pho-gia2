import React from 'react'
import './MenuOpen.css'

const MenuOpen = () => {
    return (
      <div className="downUp">
        <h1>Menu</h1>
        <p className="menuText">
          Please Let us know if you are allergic to any ingredient!
        </p>
        <div className="mealOptions">
          <p>Vegetarian Meal or Option Available </p>
          <img
            alt="vegetarian meals and options available"
            src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/vegan.png"
            className="imgLeft"
          />
        </div>
        <div className="mealOptions">
          <p>Gluten Meal or Option Available </p>
          <img
            alt="gluten free meals and options available"
            src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/gluten-free.png"
            className="glutenImg imgLeft"
          />
        </div>
      </div>
    );
}

export default MenuOpen
